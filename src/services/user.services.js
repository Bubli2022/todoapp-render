const Users = require("../models/users.models")
const Todos = require("../models/todos.models")

class UserServices {
   static async getAll() {
      try {
         const result = await Users.findAll()
         return result
      } catch (error) {
         throw new error()
      }
   }
   static async getById(id) {
      try {
         const result = await Users.findByPk(id)
         return result
      } catch (error) {
         throw error
      }
   }

   static async getWithTasks(id) {
      try {
         const result = await Users.findOne({
            where: { id },
            attributes: {
               exclude: ["password"],
            },
            include: {
               model: Todos,
               as: "task",
            },
         })
         return result
      } catch (error) {
         throw error
      }
   }

   static async create(user) {
      try {
         const result = await Users.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async update(id, field) {
      try {
         const result = await Users.update(field, { where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await Users.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = UserServices
