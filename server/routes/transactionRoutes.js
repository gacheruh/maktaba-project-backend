const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

// Middleware to ensure the user is authenticated
router.use(authenticateToken);

// POST a new transaction
router.post('/', async (req, res) => {
    const { orderId, amount, paymentMethod } = req.body;
    const newTransaction = new Transaction({
        user: req.user.id,
        order: orderId,
        amount,
        paymentMethod,
    });

    try {
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: 'Error creating transaction', error });
    }
});

// GET all transactions for the logged-in user
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id }).populate('order');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
});

// GET a specific transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate('order');
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transaction', error });
    }
});

module.exports = router;
