var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var uniqueValidator = require ("mongoose-unique-validator")

 var datosRegistro = new Schema ({
   nombres: {type:String},
   apellidos: {type:String},
   documento: {type:String, unique:true},
   correo: {type:String, unique:true},
   contraseña: {type:String},
   rol: {type:String, enum:["Estudiante", "Lider", "Administrador"]},
   estado: {type:String, enum:["Pendiente", "Autorizado"]},
   proyectos: {type:Array}
 }) 

 module.exports = mongoose.model('Registro', datosRegistro)
