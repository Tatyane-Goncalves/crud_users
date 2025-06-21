"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const express_1 = require("express");
const users_1 = require("../users");
const crypto_1 = require("crypto");
exports.createUser = (0, express_1.Router)();
exports.createUser.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required." });
    }
    const newUser = {
        id: (0, crypto_1.randomUUID)(),
        name,
        email
    };
    users_1.users.push(newUser);
    return res.status(201).json({ message: "User create successfully!", users: newUser });
});
