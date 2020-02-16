const bcrypt = require('bcrypt');
const { validationResult, body} = require('express-validator');
const db = require('../database/models');
const userCv = require('../helpers/user_cv.js');
const mainHelps = require('../helpers/mainHelpers');

const controller = {
	home: (req, res) => {
		let page = req.query.page != undefined ? req.query.page : 0;
		let pagination = mainHelps.pagination(page);

		db.anuncios.findAll({
			offset : pagination.offset,
			limit : pagination.limit,
			include : ['empresas']
		})
		.then(anuncios => {				
			res.render('main/index', { anuncios, page });
		})
	},
	busquedaHome: (req, res) => {
		// traer datos enviados en la barra de busqueda y mostrar resultados
		res.redirect('/');
	},
	detalleAnuncio: (req, res) => {
		id = req.query.id;

		res.render('main/detalleAnuncio', { anuncio: anu });
	},
	loginUsuario: (req, res) => {
		res.render('main/loginUsuario', { title: 'Express' });
	},
	validarUsuario: (req,res) => {
		console.log('--------- Main controller ------------');
		
		// validar formulario con express-validator
		const errors = validationResult(req);

		if(errors.isEmpty()){

			db.clientes.findOne({ where : { user_email : req.body.user_email } })
			.then( user => {
				
				if(bcrypt.compareSync(req.body.user_passwd,user.user_passwd)){
					console.log('contrasena correcta')
					req.session.user = user;
					req.session.type_user = 'cliente';
					console.log('sesion creada con usuario: ' + req.session.user.user_name)
					res.cookie('user_id', bcrypt.hashSync(toString(user.user_id),10),{maxAge: 1000 * 60 * 30 });
					console.log('cookie creada');
					res.cookie('type_user','cliente',{maxAge: 1000 * 60 * 30 });
					
					return res.redirect('/perfil');
				} else{
					console.log('error en el login')
					return res.redirect('/login'); 
				}
			}) .catch( error => { console.log(error) })

		} else {
		return res.render('main/loginUsuario', { errors: errors.array() });
		}
	},
	registroUsuario: (req, res) => { 
		res.render('main/registroUsuario', { title: 'Express' });
	},
	valRegUsuario: (req,res) => {
		const errors = validationResult(req);

		if(errors.isEmpty()){	

			req.body.user_passwd = bcrypt.hashSync(req.body.user_passwd,10);
			let user_avatar = req.file ? req.file.filename : 'user_avatar_default.jpg';
			db.clientes.create({ ...req.body, user_avatar : user_avatar });
			
			delete req.body.user_passwd
			let user = { ...req.body }
			req.session.user = user;
			req.session.type_user = 'cliente'
			return res.redirect('registro/cv');

		} else {
			res.render('main/registroUsuario', { errors: errors.array() });
		}
	},
	completarCv : (req,res) => {
		res.render('main/completarRegistro', { title: 'Completar tu registro' });
	},
	valCompletarCv : (req,res) => {
		const errors = validationResult(req);
		//if(errors.isEmpty()){

			db.clientes.findOne({
				where : {
					user_email : req.session.user.user_email
				}
			}) .then(user => {
				let id = user.user_id

				let clienteCv = userCv.infoPersonal(req.body,id);
				let clienteExp = userCv.infoLaboral(req.body,id);
				let clienteEduc = userCv.infoEducacion(req.body,id);
	
				db.cliente_cv.create({ ...clienteCv });
				db.cliente_experience.create({ ...clienteExp });
				db.cliente_education.create({ ...clienteEduc });

				return res.redirect('/login');
			})

		//} else {
		//	res.render('main/completarRegistro', { errors: errors.array(), user: user });
		//	}
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	validarEmpresa: (req,res) => {

		db.empresas.findOne({
			where: {
				cmp_user_email: req.body.cmp_user_email,
			}
		}).then(empresa=>{
			
			if(empresa)
			{
				
				if(bcrypt.compareSync(req.body.cmp_user_passwd,empresa.cmp_user_passwd)){
					delete empresa.cmp_user_passwd;
					delete empresa.cmp_cuit;
					delete empresa.cmp_tel;
					delete empresa.cmp_sector;
					
					req.session.type_user = 'empresa';
					req.session.user = empresa;
					res.cookie('user_id', bcrypt.hashSync(toString(empresa.id),12),{maxAge: 1000 * 60 * 30 });
					res.cookie('type_user', "empresa",{maxAge: 1000 * 60 * 30 });
			        return res.redirect('/empresa/perfil');
					
				} 
				else
				{
					
				return	res.render('main/registroEmpresa',{errors:[{msg:"Usuario y/o contraseña erroneo"}]})
				}
			}
			return res.render('main/registroEmpresa',{errors:[{msg:"Usuario y/o contraseña erroneo"}]})
		})
		.catch(error => {
			console.log(error);
		})
		 
	},
	registroEmpresa: (req, res) => {
		res.render('main/registroEmpresa', { title: 'Express' });
	},
	valRegEmpresa: (req,res) => {

		 db.empresas.findOne({
			 where:{cmp_user_email:req.body.cmp_user_email}
		 })
		 .then(resultado => {
			 if(resultado == null)
			 {
				req.body.cmp_user_passwd = bcrypt.hashSync(req.body.cmp_user_passwd,12);
				const user = db.empresas.create({...req.body,cmp_avatar:req.file.filename})
				return user;
			}
			 else
			 {
				 res.render('main/registroEmpresa',{errors:[{msg:"Email en uso"}]})
			 }
			 
		 })
		 .then(empresa => {
			 		delete empresa.cmp_user_passw;
					delete empresa.cmp_cuit;
					delete empresa.cmp_tel;
					delete empresa.cmp_sector;
			req.session.type_user = 'company';
			req.session.data = empresa;
			res.cookie('user_id', bcrypt.hashSync(toString(empresa.id),12),{maxAge: 1000 * 60 * 30 });
			return res.redirect('/empresa/perfil');
		})
		 .catch(error =>{
			 console.log(error);
		 })
	},
	recuperar: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		return res.redirect('/perfil');
	},
	recuperarEmpresa: (req,res) => {
		// consultar info en DB y enviar al correo los datos de la cuenta
		res.redirect('/empresa/perfil');
	},

	logout:(req,res)=>
	{
		req.session.destroy();
		res.cookie('user_id', null, { maxAge: -1 });
		res.cookie('type_user', null, { maxAge: -1 });
		
		return res.redirect('/');
	},

	pruebas:(req,res) =>
	{
		/*db.clientes.findAll()
		.then(result => {
			res.send(result)
		})*/
		/*db.anuncios.findAll()
			.then(result =>{
				res.send(result)
			})*/
			//let a  = new Date().toJSON().slice(0,10).replace(/-/g,'/')
			
			let a = new Date().toLocaleDateString().slice(0,10).split('-');
			a = a[2] + '/' + a[1] + '/' + a[0];
			
			
	}
};

module.exports = controller;
