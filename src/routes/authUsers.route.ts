import { Router, Request,Response } from 'express'

const authRouter = Router()

authRouter.get('/',async (req:Request,res:Response) => {
    return res.status(200).send("message")
})

export default authRouter