import { Response, Request } from "express";
import { Contact } from "../model/Contact";

export async function getAllContacts(_: any, res: Response) {
    try {
        const allContacts = await Contact.find()
        res.status(200).json(allContacts)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

export async function getOneContact(req: Request, res: Response) {
    try {
        const { id } = req.params
        const contact = await Contact.findById(id)
        res.status(200).json(contact)
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: "Not found" })
    }
}

export async function registerContact(req: Request, res: Response) {
    const { name, contact } = req.body

    if (!name || !contact) {
        return res.status(428).json({ error: "'name' or 'contact' not entered" })
    }

    if (typeof contact !== "number") {
        return res.status(400).json({ error: "Bad resquest, 'contact' no is number" })
    }

    if (contact.toString().length < 3) {
        return res.status(428).json(
            {
                error: 'number does not meet the requirements',
                requirements: 'name must have at least 3 characters'
            }
        )
    }

    if (name.length < 3) {
        return res.status(428).json(
            {
                error: 'name does not meet the requirements',
                requirements: 'name must have at least 3 characters'
            }
        )
    }

    try {
        const newContact = new Contact({ name: name.trim(), contact })
        await newContact.save()
        res.status(201).json({ success: "contact created successfully" })
    } catch (error) {
        console.log(`Error saving a new contact:\n${error}`);
        res.status(400).json({ error: "Bad request" })
    }
}

export async function updateContact(req: Request, res: Response) {
    const { id, name, contact } = req.body

    if (!id || !name || !contact) {
        return res.status(400).json({ error: "Bad request, 'id', 'name' or 'contact' not entered" })
    }

    try {
        await Contact.findByIdAndUpdate(id, { name, contact })
        res.status(200).json({ success: "successfully updated" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Bad request" })
    }
}

export async function deleteContact(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ error: "'id' no entered" })
    }

    try {
        const deletedContact = await Contact.findByIdAndDelete(id)
        res.status(200).json({ success: 'contact deleted successfully' })
    } catch (error) {
        console.log(error);
    }
}