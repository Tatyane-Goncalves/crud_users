import express from "express"
import SwaggerUI from "swagger-ui-express"
import SwaggerJsDoc from "swagger-jsdoc"
import { listUsers } from "./router/listUsers"
import { createUser } from "./router/createUser"
import { updateUser } from "./router/updateUser"
import { deleteUser } from "./router/deleteUser"
import { listCategoriesRouter } from "./router/listCategoriesRouter"
import { createCategory } from "./router/createCategory"
import { listTaskRouter } from "./router/listTaskRouter"
import { createTaskRouter } from "./router/createTaskRouter"
import { updateTaskRouter } from "./router/updateTaskRouter"

const api = express()
api.use(express.json())

const SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "To Do List",
      version: "0.0.1",
      description: "API documentation maked with Express and Swagger"
    },
    servers: [
      {
        url: "http://localhost:3333/tasks"
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
}

const swaggerSpec = SwaggerJsDoc(SwaggerOptions)
api.use("/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpec))




// CRUD User
api.use(listUsers)
api.use(createUser)
api.use(updateUser)
api.use(deleteUser)

// CRUD Category
api.use(listCategoriesRouter)
api.use(createCategory)

// CRUD Task
api.use(listTaskRouter)
api.use(createTaskRouter)
api.use(updateTaskRouter)


api.listen(3333, () => {
  console.log("HTTP server is running on http://localhost:3333/tasks")
  console.log("Documentation is running on http://localhost:3333/docs")
})