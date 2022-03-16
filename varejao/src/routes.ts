import { Router } from "express";
import contacts from "./app/controller/contacts";

const route = Router();

route.get("/", () => {
  console.log("/Home");
});

// contacts
route.post("/contact", contacts.create);
route.get("/contact", contacts.read);

export default route;
