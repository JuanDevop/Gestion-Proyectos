import { Schema, model } from "mongoose"

 var datosRegistro = new Schema ({
   nombres: {type:String},
   apellidos: {type:String},
   documento: {type:String, unique:true},
   correo: {type:String, unique:true},
   contraseña: {type:String},
   rol: {type:String, enum:["Estudiante", "Lider", "Administrador"]},
   estado: {type:String, enum:["Pendiente", "Autorizado"]},
   proyectos: {type:Array},
   celular: {type:String},
   direccion: {type:String},
   ciudad: {type:String},
   descripcion: {type:String},
 }) 

 export default model('Registro', datosRegistro )
