"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./controller/user"));
const auth_1 = __importDefault(require("./controller/auth"));
const macapa_1 = __importDefault(require("./controller/macapa"));
const varejao_1 = __importDefault(require("./controller/varejao"));
const auth_2 = __importDefault(require("./middleware/auth"));
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.send("/Home");
});
routes.post("/login", auth_1.default.auth);
routes.post("/user", user_1.default.create);
routes.post("/macapa", auth_2.default, macapa_1.default.save);
routes.get("/macapa", auth_2.default, macapa_1.default.read);
routes.post("/varejao", auth_2.default, varejao_1.default.save);
routes.get("/varejao", auth_2.default, varejao_1.default.read);
exports.default = routes;
