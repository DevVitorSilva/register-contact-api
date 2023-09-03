import { Schema, model } from "mongoose";

interface IContact {
    name: string
    contact: number
}

const contactSchema = new Schema<IContact>(
    {
        name: {type: String, required: true, minlength: 3},
        contact: {type: Number, required: true, minlength: 8}
    }
)

export const Contact = model<IContact>("contacts", contactSchema)