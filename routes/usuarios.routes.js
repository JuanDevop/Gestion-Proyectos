import { Router } from "express";
import * as controladorUsuarios from '../controllers/usuarios.controller'

const router = Router();

router.post('/', controladorUsuarios.createUsuario)

router.get('/', controladorUsuarios.getUsuarios)

router.get('/', controladorUsuarios.getUsuarioById)



export default router;