import express from "express"
import { listUsers } from "./router/listUsers"
import { createUser } from "./router/createUser"
import { updateUser } from "./router/updateUser"
import { deleteUser } from "./router/deleteUser"

const api = express()

api.use(express.json())

api.use(listUsers)
api.use(createUser)
api.use(updateUser)
api.use(deleteUser)

api.listen(3333, () => {
  console.log("HTTP server is running on http://localhost:3333/users.")
})