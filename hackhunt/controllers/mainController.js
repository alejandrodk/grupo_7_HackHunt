const fs = require("fs");
const path = require("path");

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), "utf-8");
	return htmlFile;
}

const controller = {
	home: (req, res) => {
		let html = readHTML("index");
		res.send(html);
	},
	detalleAnuncio: (req, res) => {
		let html = readHTML("detalleAnuncio");
		res.send(html);
	},
	misPostulaciones: (req, res) => {
		let html = readHTML("misPostulaciones");
		res.send(html);
	},
	registroEmpresa: (req, res) => {
		let html = readHTML("registroEmpresa");
		res.send(html);
	},
	registroUsuario: (req, res) => {
		let html = readHTML("registroUsuario");
		res.send(html);
	},
	crearPublicacion: (req, res) => {
		let html = readHTML("crearPublicacion");
		res.send(html);
	}
};

module.exports = controller;
