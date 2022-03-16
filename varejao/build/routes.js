"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_1 = __importDefault(require("./app/controller/contacts"));
const route = (0, express_1.Router)();
route.get("/", () => {
    console.log("/Home");
});
route.post("/contact", contacts_1.default.create);
route.get("/contact", contacts_1.default.read);
exports.default = route;
