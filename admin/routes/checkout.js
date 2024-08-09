import { Router } from "express";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PWscOL3BkBJk9RpLl0RojVbDLL5k1fzCtG9cetkJ1uH6Hd2LsfnTYSUC2Icqq5m9MQfRQWmNlcqIAnjUpVCDFZH00N1nAm0W7'); // Replace with your actual Stripe secret key
const router = Router();

router.post("/proced-checkout", async (req, res) => {
    const products = req.body;
    
    const lineItems = products.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item?.title,
                images: [item?.image[0]], // Assuming `item.image` contains the image URL
            },
            unit_amount: item?.price * 100, // Convert price to cents
        },
        quantity: item?.quentity, // Corrected typo
    }));

    console.log(lineItems); // Log lineItems for debugging

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/pament-success',
            cancel_url: 'http://localhost:5173/pament-cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe Checkout session:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;