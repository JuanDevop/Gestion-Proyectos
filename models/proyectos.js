import { Schema, model } from "mongoose"

 var datosProyecto = new Schema ({
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

 export default model('Proyecto', datosProyecto )
