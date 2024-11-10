const express = require("express")
const Order = require('../models/Order.js');
const router = express.Router();


router.post('/', async (req, res) => {
    const { productId, quantity } = req.body;
    const newOrder = new Order({ user: req.user.id, productId, quantity });
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error creating order', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});

module.exports = router;