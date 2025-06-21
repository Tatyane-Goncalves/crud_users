import { Router, Request, Response } from "express"
import { users } from "../users"

const listUsers = Router()
listUsers.get("/users", (req: Request, res: Response) => {
  res.json(users)
})

export { listUsers }