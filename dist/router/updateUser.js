"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const express_1 = require("express");
const users_1 = require("../users");
exports.updateUser = (0, express_1.Router)();
exports.updateUser.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    // Encontra o id do usuário
    const userId = users_1.users.findIndex((user) => user.id === id);
    if (userId === -1) {
        res.status(404).json({ message: "User not found" });
    }
    if (!name && !email) {
        return res.status(400).json({ message: "No data provided to update" });
    }
    // Atualiza as informações do usuário mantendo o id
    users_1.users[userId] = {
        ...users_1.users[userId],
        name: name || users_1.users[userId].name,
        email: email || users_1.users[userId].email,
    };
    res.status(200).json({
        message: "User upadate successfully!", user: users_1.users[userId]
    });
});
