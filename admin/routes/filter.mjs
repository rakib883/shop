import { Router } from "express";
import { products } from "../constance/index.mjs";

const router = Router();

router.get("/search-filter/:id", async(req, res) => {
    const filterData = req.params.id;
    console.log(filterData)
    try {
        const product = products.filter((item) => item.name.toLowerCase() === filterData.toLowerCase());
        console.log(product)
        if (product.length > 0) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ message: "No products found matching the given criteria." });
        }
    } catch (error) {
        console.error('Error occurred:', error); // Log the error for debugging
        res.status(500).send({ message: "An internal server error occurred" });
    }
});

export default router;
