//Importamos express
const express = require("express");

//Creamos la app
const app = express();

//Implenetando motor de plantillas ejs
app.set("view engine", "ejs");

//URLs
app.get("/Home", (req, res)=>{
    res.render("index");
})

app.get("/Biografia", (req, res)=>{
    res.render("Biografia");
})

app.get("/Obras", (req, res)=>{
    res.render("Obras");
})

app.get("/Registro", (req, res)=>{
    res.render("Registro");
})

//Especifica el tipo MIME para archivos CSS
app.get('/css/index.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/index.css');
});

app.get('/css/biografia.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/biografia.css');
});

app.get('/css/obras.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/obras.css');
});

app.get('/css/Registro.css', (req, res) => {
    res.type('text/css');
    res.sendFile(__dirname + '/css/Registro.css');
});

//Publicamos nuestra app
app.listen(3001, (req, res)=>{
    console.log("Mi App está corriendo");
});