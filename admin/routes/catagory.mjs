import { Router } from "express";
import { categories, products } from "../constance/index.mjs";

const router = Router()

router.get("/catagories",(req,res)=>{
    res.send(categories)
})

router.get("/catagories/:id",(req,res)=>{
    const id = req.params.id
    const catagoryData = products?.filter((item)=>item?._base === id)
     if(!catagoryData || catagoryData.length === 0){
         return res
         .status(404)
         .json({message:"data not found"})
     }
   
     res.json(catagoryData)

})

export default router