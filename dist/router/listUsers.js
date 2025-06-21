"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = void 0;
const express_1 = require("express");
const users_1 = require("../users");
const listUsers = (0, express_1.Router)();
exports.listUsers = listUsers;
listUsers.get("/users", (req, res) => {
    res.json(users_1.users);
});
