const fs = require("fs");
const path = require("path");

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/main/${fileName}.html`), "utf-8");
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
	loginUsuario: (req, res) => {
		let html = readHTML("loginUsuario");
		res.send(html);
	},
	registroUsuario: (req, res) => {
		let html = readHTML("registroUsuario");
		res.send(html);
	},
	loginEmpresa: (req, res) => {
		let html = readHTML("loginEmpresa");
		res.send(html);
	},
	registroEmpresa: (req, res) => {
		let html = readHTML("registroEmpresa");
		res.send(html);
	},
};

module.exports = controller;
