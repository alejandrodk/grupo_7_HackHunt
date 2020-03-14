const bcrypt = require('bcrypt');
const { validationResult, body} = require('express-validator');
const db = require('../database/models');
const userCv = require('../helpers/user_cv.js');
const busquedaAnuncios = require('../helpers/busquedaFilter');

const controller = {
	home: (req, res) => {
		let 
			page = req.query.page != undefined ? req.query.page : 0;
			busquedas = req.session.busquedas != undefined ? req.session.busquedas.filtros : [];
			user = req.session.user != undefined ? req.session.user.user_id : null;
			
		busquedaAnuncios(req) 
		.then(anuncios => {
			if(req.session.type_user == 'cliente'){
			
				db.clientes.findByPk(req.session.user.user_id,
					{
						include:[{model:db.skills, as:'skill'}]
					})
					.then(cliente => {
						//return res.send(cliente)
						return res.render('main/index',{ 
							busquedas,
							anuncios,
							page,
							cliente,
							user
						})
					})
			}
			else{

				return res.render('main/index',{ 
					busquedas,
					anuncios,
					page,
					user
				}) 
			}
		})
	},
	detalleAnuncio: (req, res) => {
		
		db.anuncios.findByPk(req.query.id,
			{
				raw:true,
				attributes:{include:[db.Sequelize.col('empresas.cmp_avatar')]},
				include:[{model:db.empresas, as:'empresas',attributes:['cmp_avatar']}]
			})
		.then(resultado =>{
			db.anuncios.findAll({
				limit:5,
				attributes: ['id','adv_title','adv_location','adv_working_day'],
				include:[{model:db.empresas, as:'empresas', attributes:['cmp_name','cmp_avatar']}]
			})
			.then(relacionados => {
				//return res.send(relacionados)
				res.render('main/detalleAnuncio', { 
					anuncio: resultado,
					relacionados
				});

			})
		})

	},
	postulacion: (req, res) => { 
		let anuncioId = req.query.anuncioId;
		let userId = req.session.user.user_id;
		db.postulantes.create({
			adv_id : anuncioId,
			cli_id : userId
		})
		.then(result => {
			return res.redirect('/perfil/postulaciones')
		})
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
					res.cookie('user_id', bcrypt.hashSync(user.user_id.toString(),10),{maxAge: 1000 * 60 * 30 });
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
			db.clientes.create({ ...req.body, user_avatar : user_avatar })
			.then(()=>
			{

				delete req.body.user_passwd
				let user = { ...req.body }
				req.session.user = user;
				req.session.type_user = 'cliente'
				return res.redirect('registro/cv');
			})

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
					
					res.cookie('user_id', bcrypt.hashSync(empresa.id.toString(),12),{maxAge: 1000 * 60 * 30 });
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
			res.cookie('user_id', bcrypt.hashSync(empresa.id.toString(),12),{maxAge: 1000 * 60 * 30 });
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
		db.anuncios.findAll()
			.then(result =>{
			return	res.send(result)
			})
			//let a  = new Date().toJSON().slice(0,10).replace(/-/g,'/')
			
		
			
			
	}
};

module.exports = controller;
