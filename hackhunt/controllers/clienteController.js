const fs = require("fs");
const path = require("path");

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/cliente/${fileName}.html`), "utf-8");
    return htmlFile;
}

const controller = {
    perfil: (req, res) => {
        let html = readHTML("perfil");
        res.send(html);
    },
    postulaciones: (req, res) => {
        let html = readHTML("postulaciones");
        res.send(html);
    },
    favoritos: (req, res) => {
        let html = readHTML("favoritos");
        res.send(html);
    },
    info: (req, res) => {
        let html = readHTML("info");
        res.send(html);
    },
    mensajes: (req, res) => {
        let html = readHTML("mensajes");
        res.send(html);
    },
     configuracion: (req, res) => {
        let html = readHTML("config");
        res.send(html);
    },

};

module.exports = controller;