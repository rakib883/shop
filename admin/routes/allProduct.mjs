import { Router } from "express";
import { products } from "../constance/index.mjs";

const router = Router();

router.get("/product", (req, res) => {
    res.send(products);
});

router.get("/product/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const singleData = products.find((item) => item?._id === id);

    if (!singleData) {
        return res
            .status(404)
            .json({ message: "data not found" });
    }
    
    res.json(singleData);
});

export default router;
