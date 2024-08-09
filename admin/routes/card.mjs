import { Router } from "express";
import cardMethidModal from "../UserSchema/cardMethodItem.mjs";

const router = Router()

router.post("/card",async(req,res)=>{

    const cardMethod = new  cardMethidModal(req.body)
    try{
        
        const existingData = await cardMethidModal.findOne({cardNumber:req.body?.cardNumber,})

        if(existingData){
            return res.status(409).json({message:"This cartt allredy added"})
        }

        const cardData = await cardMethod.save()
        res.status(201).json({message:"Card add successfully"})
    }
    
    
    catch(error){
        console.log(error)
    }
})


router.get("/card",async(req,res)=>{
    try{
       const cardData = await cardMethidModal.find()
       res.status(200).json(cardData)
    }catch(error){
        console.log(error)
    }
})

export default router