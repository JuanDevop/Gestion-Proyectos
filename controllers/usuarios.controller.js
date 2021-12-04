import proyectos from "../models/proyectos";
import usuarios from "../models/usuarios";

export const createUsuario = async (req, res) => {

    const {nombres, apellidos, documento, correo, contraseña, rol, estado, proyectos, celular, direccion, ciudad, descripcion} = req.body

    const newUsuario = new usuarios({
        nombres, apellidos, documento, correo, contraseña, rol, estado, proyectos, celular, direccion, ciudad, descripcion
    })

    const usuarioGuardado = await newUsuario.save()

    res.status(201).json(usuarioGuardado)

}

export const getUsuarios = async (req, res) => {
    const usuario = await usuarios.find()
    res.json(usuario)
}

export const getUsuarioById = async (req, res) => {
    const usuario = await usuarios.findById(req.params.usuarioId)
    res.status(200).json(usuario)
}

export const updateUsuarioById = async (req, res) => {
    const usuarioActualizado = await usuarios.findByIdAndUpdate(req.params.usuarioId, req.body, {
        new: true
    })
    res.status(200).json(usuarioActualizado)
}
export const deleteUsuarioById = async (req, res) => {
    await usuarios.findByIdAndDelete(req.params.usuarioId)
    res.status(204).json()
}