import dotenv from 'dotenv'

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  http = require('http'),
  server = http.createServer(app),
  mongoose = require("mongoose");


dotenv.config({path: './.env'})

const port = process.env.PORT;
const stringConexion = process.env.DATABASE_URL;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(router);

mongoose.connect(stringConexion,(err, res)=>{
  if(err){
    console.log("ERROR: Conectando a la base de Datos"+ err)
  }
  app.listen(port, function () {
    console.log("Node server running on http://localhost:3000");
  });
})





