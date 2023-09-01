import { Router, Response, Request } from "express";

const router = Router()

router.get("/all-contacts", (_, res: Response)=>{
    res.json({msg: "Hello World"})
})

router.post("/register-contact", (req: Request, res: Response) => {
    const {name, contact} = req.body
    console.log(name)
    console.log(contact);
    res.json({name,contact})
})

export {
    router
}