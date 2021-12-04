import { Router } from "express";
import * as controladorUsuarios from '../controllers/usuarios.controller'

const router = Router();

router.post('/', controladorUsuarios.createUsuario)




export default router;