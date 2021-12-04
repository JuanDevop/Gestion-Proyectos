import express from "express";
import morgan from 'morgan'
import proyectRoutes from './routes/proyectos.routes'
import usuariosRoutes from './routes/usuarios.routes'

const app = express()


app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) =>{
    res.json({
        author: 'Grupo NDJM',
        descripcion: 'Proyecto Mision TIC'
    })
})

app.use('/proyectos',proyectRoutes)
app.use('/usuarios',usuariosRoutes)

export default app