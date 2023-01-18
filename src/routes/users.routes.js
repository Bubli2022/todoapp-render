const { Router } = require("express")
const UserServices = require("../services/user.services")

const {
   getAllUsers,
   getUserById,
   getUserWithTasks,
   createUser,
   updateUser,
   deleteUser,
} = require("../controllers/users.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()

// en lugar de app.get, app.post, app.put o app.delete va esto...

//responde a todo lo que viene en localhost:8000/users

//dentro de este codigo vamos a tener nuestro controlador
router.get("/users", authMiddleware, getAllUsers)

router.get("/users/:id", authMiddleware, getUserById)

//obtener a un usuario con sus tareas
router.get("/users/:id/todos", authMiddleware, getUserWithTasks)

router.post("/users/", createUser)

router.put("/users/:id", authMiddleware, updateUser)

router.delete("/users/:id", authMiddleware, deleteUser)

module.exports = router
