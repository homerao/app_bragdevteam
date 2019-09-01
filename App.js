// módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const userRoutes = require("./routes/users");
const path = require('path');

//config


//config database

// public
app.use(express.static(path.join(__dirname, "public")));
// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//rotas

app.use('/', userRoutes);


//outros
const servidor = "localhost";
const database = "database";
const port = 3000;

app.listen( port, () =>{
  console.log("Servidor iniciado com sucesso! " + "porta " + port);
});