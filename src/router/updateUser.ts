import { Router, Request, Response } from "express"
import { users } from "../users"

interface User {
  id: string,
  name: string;
  email: string;
}

export const updateUser = Router()

updateUser.put("/users/:id", (req: Request, res: Response): any => {
  const { id } = req.params
  const { name, email } = req.body

  // Encontra o id do usuário
  const userId = users.findIndex((user) => user.id === id)

  if (userId === -1) {
    res.status(404).json({ message: "User not found" })
  }

  if (!name && !email) {
    return res.status(400).json({ message: "No data provided to update" });
  }


  // Atualiza as informações do usuário mantendo o id
  users[userId] = {
    ...users[userId],
    name: name || users[userId].name,
    email: email || users[userId].email,
  }

  res.status(200).json({ 
    message: "User upadate successfully!", user: users[userId]
  })
})