import { Router } from "express";
import { deleteContact, getAllContacts, getOneContact, registerContact, updateContact } from "../controllers/contact";

const router = Router()

router.get("/all-contacts", getAllContacts)

router.get("/contact/:id", getOneContact)

router.post("/register-contact", registerContact)

router.put("/update-contact", updateContact)

router.delete("/delete-contact", deleteContact)

export {
    router
}