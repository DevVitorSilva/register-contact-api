import express, { Request, Response } from "express";
import { router } from "./routes/contactRoutes";

const app = express();
const PORT: number = 9001

app.use('/api/v1', express.json(), router)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})