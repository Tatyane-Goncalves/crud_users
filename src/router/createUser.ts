import { Router, Request, Response } from "express"
import { users } from "../users"
import { randomUUID } from "crypto"

interface User {
  id: string,
  name: string;
  email: string;
}


export const createUser = Router()
createUser.post("/users", (req: Request, res: Response): any => {
  const { name, email } = req.body
  

  if (!name || !email) {
    return  res.status(400).json({ error: "Name and email are required."})
  }

  const newUser: User = {
    id: randomUUID(), 
    name, 
    email 
  }
  users.push(newUser)

  return res.status(201).json({ message: "User create successfully!", users: newUser})

})
