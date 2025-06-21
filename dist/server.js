"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listUsers_1 = require("./router/listUsers");
const createUser_1 = require("./router/createUser");
const updateUser_1 = require("./router/updateUser");
const deleteUser_1 = require("./router/deleteUser");
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use(listUsers_1.listUsers);
api.use(createUser_1.createUser);
api.use(updateUser_1.updateUser);
api.use(deleteUser_1.deleteUser);
api.listen(3333, () => {
    console.log("HTTP server is running on http://localhost:3333/users.");
});
