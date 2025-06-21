import { Router, Request, Response } from "express"
import { users } from "../users"

export const deleteUser = Router()

deleteUser.delete("/users/:id", (req: Request, res: Response): any => {
  const { id } = req.params

  // Find ID user
  const userId = users.findIndex((user) => user.id === id)

  if (userId === -1) {
    res.status(404).json({ message: "User not found" })
  }

  users.splice(userId, 1)

  return res.status(200).json({ message: "User  deleted successfully!"})

})