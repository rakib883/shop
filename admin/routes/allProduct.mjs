import { Router } from "express";
import { products } from "../constance/index.mjs";

const router = Router()
 
router.get("/product",(req,res)=>{
    res.send(products)
})

export default router