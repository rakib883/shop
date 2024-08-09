import { Router } from "express";
import InfoModel from "../UserSchema/User.mjs";


const router = Router();

router.post("/address", async (req, res) => {
  const info = new InfoModel(req.body); 
  try {
    const savedInfo = await info.save();
    res.status(201).json(savedInfo); // Respond with the saved data and a 201 status
  } catch (error) {
    console.error("Error saving the data:", error); // More detailed error logging
    res.status(500).json({ message: "Error saving the data" }); // Send an error response
  }
});

export default router;
