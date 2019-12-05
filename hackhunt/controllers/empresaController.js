const fs = require("fs");
const path = require("path");

// ************ Function to Read an HTML File ************
function readHTML(fileName) {
    let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/empresa/${fileName}.html`), "utf-8");
    return htmlFile;
}

const controller = {
    perfil: (req, res) => {
        let html = readHTML("perfil");
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
    anuncios: (req, res) => {
        let html = readHTML("anuncios");
        res.send(html);
    },
    anuncioDetalle: (req, res) => {
        let html = readHTML("anuncioDetalle");
        res.send(html);
    },
    postulantes: (req, res) => {
        let html = readHTML("postulantes");
        res.send(html);
    },
    postulantesDetalle: (req, res) => {
        let html = readHTML("postulanteCv");
        res.send(html);
    },
    


};

module.exports = controller;