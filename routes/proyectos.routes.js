import { Router } from "express";
import * as controladorProyecto from '../controllers/proyectos.controller'
const router = Router();

router.get('/', controladorProyecto.getProyectos)

router.post('/', controladorProyecto.createProyecto)

router.get('/:proyectoId', controladorProyecto.getProyectoById)

router.put('/:proyectoId', controladorProyecto.updateProyectoById)

router.delete('/:proyectoId', controladorProyecto.deleteProyectoById)



export default router;
