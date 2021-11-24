var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var uniqueValidator = require ("mongoose-unique-validator")

 var datosPersonales = new Schema ({
     celular: {type:String},
     direccion: {type:String},
     ciudad: {type:String},
     descripcion: {type:String},

 })

 module.exports = mongoose.model('Usuario', datosPersonales)