// importabamos express

const express = require("express")
const db = require("./utils/database")
const initModels = require("./models/init.model")
const userRoutes = require("./routes/users.routes")
const todosRoutes = require("./routes/todos.routes")
const authRoutes = require("./routes/auth.routes")
const cors = require("cors")
require("dotenv").config()

//crear una instancia de express

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

//probando la conexion a la base de datos
db.authenticate()
   .then(() => console.log("autenticación exitosa"))
   .catch((error) => console.log(error))

initModels()
//vamos a utilizar el metodo sync de nuestra db
db.sync({ force: false }) //devuelve una promesa
   .then(() => console.log("Base de datos sincronizada"))
   .catch((error) => console.log(error))

app.get("/", (req, res) => {
   res.status(200).json({ message: "Bienvenido al servidor" })
})

app.use("/api/v1", userRoutes)
app.use("/api/v1", todosRoutes)
app.use("/api/v1", authRoutes)
//definir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios
//localhost:8000/users => todo para usuarios
//localhost:8000/todos => todo para tareas

app.listen(PORT, () => {
   console.log(`servidor corriendo en el puerto ${PORT}`)
})

//vamos a terminar los modelos => rapido
//crear las relaciones entre los modelos
//les voy a enseñar a insertar info desde este mismo proyecto

//mañana estaremos haciendo los endpoints y consultas

//todo se hará desde users

//hoy vamos a insertar informacion en nuestra base de datos

//consultar la informacion con endpoints

//Entregable 02 - item 1: Obtener todas las tareas

//GET a /todos
