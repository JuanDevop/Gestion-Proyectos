import proyectos from "../models/proyectos"

export const createProyecto = async (req, res) => {

    const {id, nombre, estado, fase, lider, objetivosgenerales,objetivosespecificos,presupuesto,fechainicio,fechafin, estudiantes, avances } = req.body

    const newProyecto = new proyectos({ id, nombre, estado, fase, lider, objetivosgenerales,objetivosespecificos,presupuesto,fechainicio,fechafin, estudiantes, avances})
    
    const proyectoguardado = await newProyecto.save()
    
    res.status(201).json(proyectoguardado)
}

export const getProyectos = async (req, res) => {
    const proyecto = await proyectos.find()
    res.json(products)
}

export const getProyectoById = async (req, res) => {
    const proyecto = await proyectos.findById(req.params.proyectoId)
    res.status(200).json(proyecto)
}

export const updateProyectoById = async (req, res) => {
   const proyectoActualizado = await proyectos.findByIdAndUpdate(req.params.proyectoId, req.body, {
       new: true
   })
   res.status(200).json(proyectoActualizado)
}

export const deleteProyectoById = async (req, res) => {
    await proyectos.findByIdAndDelete(req.params.proyectoId)
    res.status(204).json()
}