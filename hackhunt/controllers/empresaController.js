const fs = require('fs');

const controller = {
	perfil: (req, res) => {
		let anuncios = fs.readFileSync('data/anuncios.json', {encoding: 'utf-8'});
		res.render("empresa/perfil", { anuncios: JSON.parse(anuncios) });
	},
	info: (req, res) => {
		res.render("empresa/info", { title: "Express" });
	},
	mensajes: (req, res) => {
		res.render("empresa/mensajes", { title: "Express" });
	},
	anuncios: (req, res) => {
		let anuncios = fs.readFileSync('data/anuncios.json', {encoding : 'utf-8'} )

		res.render("empresa/anuncios", { anuncios: JSON.parse(anuncios) });
	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		res.render("empresa/crearPublicacion", { title: "Express" });
	},
	postearPublicacion : (req,res) => {
		let contenido = fs.readFileSync('data/anuncios.json', {encoding:'utf-8'});
		let date = new Date();
		let fechaAct = `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`
		let id = (JSON.parse(contenido).length) + 1;
		let anuncio = {
			// identificadores
			id : id,
			// traer empresa de sesion
			empresa : '', //id de la empresa que publico
			// info POST
			titulo : req.body.titulo,
			descrp : req.body.descrp,
			skillsex : req.body.skillsex,
			skillsdes : req.body.skillsdes,
			fecha : req.body.fecha,
			publicacion : fechaAct,
			area : req.body.area,
			ubicacion : req.body.ubicacion,
			cargo : req.body.cargo,
			jornada : req.body.jornada,
			salario : req.body.salario,
			beneficios : req.body.beneficios,
			// info para empresa
			nuevos : 0,
			candidatos : 0,
			destacados : 0,
			postulantes : [],
			favoritos : []
		}

		if (contenido == ''){
			contenido = [];
		} else {
			contenido = JSON.parse(contenido);
		}
		
		contenido.push(anuncio);
		
		let contenidoJSON = JSON.stringify(contenido);
		fs.writeFileSync('data/anuncios.json',contenidoJSON);

		res.redirect(`/detalle?id=${id}`);
	},
	modificarPublicacion: (req, res) => {
		res.render("empresa/modificarPublicacion", { title: "Express" })
	},
	actualizarPublicacion: (req, res) => {
		// actualizar info en la DB y enviar a la vista previa 
		res.redirect("/detalle")
	},
	postulantes: (req, res) => {
		res.render("empresa/postulantes", { title: "Express" });
	},
	postulantesDetalle: (req, res) => {
		let id = req.query.id;
		// traer info de usuario de DB segun su ID
		// y guardarlo agrupado en objetos literales
		let perfil = '';
		let profesionales = '';
		let experiencia = '';
		let formacion = '';
		let idiomas = '';
		let skills = '';
		res.render("empresa/cv", 
		{ 
			perfil: perfil,
			profesionales: profesionales,
			experiencia: experiencia,
			formacion: formacion,
			idiomas: idiomas,
			skills: skills
		 });
	}
};

module.exports = controller;
