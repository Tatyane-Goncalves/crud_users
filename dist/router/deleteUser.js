"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const express_1 = require("express");
const users_1 = require("../users");
exports.deleteUser = (0, express_1.Router)();
exports.deleteUser.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    // Find ID user
    const userId = users_1.users.findIndex((user) => user.id === id);
    if (userId === -1) {
        res.status(404).json({ message: "User not found" });
    }
    users_1.users.splice(userId, 1);
    return res.status(200).json({ message: "User  deleted successfully!" });
});
