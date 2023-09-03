import express, { Request, Response } from "express";
import { router } from "./routes/contactRoutes";
import { config } from "dotenv";
import { db } from "./db/db";

config()
const app = express();
const PORT = process.env.PORT || 9001
const URI = process.env.URI

app.use('/api/v1', express.json(), router)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
    db(URI as string)
})