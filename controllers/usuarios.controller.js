import usuarios from "../models/usuarios";

export const createUsuario = async (req, res) => {

    const {nombres, apellidos, documento, correo, contraseña, rol, estado, proyectos, celular, direccion, ciudad, descripcion} = req.body

    const newUsuario = new usuarios({
        nombres, apellidos, documento, correo, contraseña, rol, estado, proyectos, celular, direccion, ciudad, descripcion
    })

    const usuarioGuardado = await newUsuario.save()

    res.status(201).json(usuarioGuardado)

}