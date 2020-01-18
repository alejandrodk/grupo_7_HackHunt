// ************ Require's ************
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const express = require("express");
const logger = require("morgan");
const path = require("path");
const methodOverride = require('method-override');
const auth = require('./middlewares/auth');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, "public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized: true, secret: 'chuleta123'}));
app.use(methodOverride('_method'));
app.use(auth);
// ************ Template Engine - (don't touch) ************
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require("./routes/main");
const clienteRouter = require("./routes/cliente");
const empresaRouter = require("./routes/empresa");

app.use("/", mainRouter);
app.use("/perfil", clienteRouter);
app.use("/empresa", empresaRouter);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.path = req.path;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

// ************ exports app - dont'touch ************
module.exports = app;
