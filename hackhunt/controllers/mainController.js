const controller = {
	home: (req, res) => {
		res.render('main/index', { title: 'Express' });
	},
	detalleAnuncio: (req, res) => {
		res.render('main/detalleAnuncio', { title: 'Express' });
	},
	loginUsuario: (req, res) => {
		res.render('main/loginUsuario', { title: 'Express' });
	},
	registroUsuario: (req, res) => {
		res.render('main/registroUsuario', { title: 'Express' });
	},
	loginEmpresa: (req, res) => {
		res.render('main/loginEmpresa', { title: 'Express' });
	},
	registroEmpresa: (req, res) => {
		res.render('main/registroEmpresa', { title: 'Express' });
	},
};

module.exports = controller;
