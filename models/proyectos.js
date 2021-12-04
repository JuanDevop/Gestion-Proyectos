var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var uniqueValidator = require ("mongoose-unique-validator")

 var datosProyecto = new Schema ({
   id: {type:String, unique:true},
    nombre: {type:String},
   estado: {type:String, enum:["Activo", "Inactivo"]},
   fase: {type:String, enum:["En desarrollo", "Terminado"]},
   lider: {type:String},
   objetivosgenerales: {type:String},
   objetivosespecificos: {type:String},
   presupuesto: {type:Number},
   fechainicio: {type:Date},
   fechafin: {type:Date},
   estudiantes: {type:Array},
   avances: {type: Array}

 }) 

 module.exports = mongoose.model('Registro', datosRegistro)
