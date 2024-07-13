import { Router } from "express";
import { brand } from "../constance/index.mjs";

const router = Router()

router.get("/brand",(req,res)=>{
    res.send(brand)
})
export default router