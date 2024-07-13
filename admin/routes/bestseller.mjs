import { Router } from "express";
import { bestseller } from "../constance/index.mjs";

const router = Router()
router.get("/bestseller",(req,res)=>{
    res.send(bestseller)
})
export default router