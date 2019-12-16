const controller = {
	perfil: (req, res) => {
		res.render("empresa/perfil", { title: "Express" });
	},
	info: (req, res) => {
		res.render("empresa/info", { title: "Express" });
	},
	mensajes: (req, res) => {
		res.render("empresa/mensajes", { title: "Express" });
	},
	anuncios: (req, res) => {
		res.render("empresa/anuncios", { title: "Express" });
	},
	anuncioDetalle: (req, res) => {
		res.render("empresa/anuncioDetalle", { title: "Express" });
	},
	crearPublicacion: (req, res) => {
		res.render("empresa/crearPublicacion", { title: "Express" });
	},
	postulantes: (req, res) => {
		res.render("empresa/postulantes", { title: "Express" });
	},
	postulantesDetalle: (req, res) => {
		res.render("empresa/postulanteCv", { title: "Express" });
	}
};

module.exports = controller;
