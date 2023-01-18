const { Sequelize } = require("sequelize")
require("dotenv").config()

//crear una instancia con parametros de configuacion de nuestra base de datos
//Necesitamos un objeto de configuracion que no es mas que las credenciales de mi base de datos
const db = new Sequelize({
   database: process.env.DB_NAME,
   username: process.env.DB_USER, // postgres para nosotros
   host: process.env.DB_HOST, //127.0.0.1 que es lo mismo al anterior
   port: process.env.DB_PORT,
   password: process.env.DB_PASSWORD,
   dialect: "postgres", // define el gestor que estamos usando
   logging: false,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

module.exports = db
