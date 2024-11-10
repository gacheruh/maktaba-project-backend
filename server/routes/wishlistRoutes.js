const express = require('express');
const Wishlist = require('../models/Wishlist'); 
const router = express.Router();

router.post('/', async (req, res) => {
    const { productId } = req.body;
    const wishlistItem = new Wishlist({ user: req.user.id, product: productId });
    try {
        await wishlistItem.save();
        res.status(201).json(wishlistItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding to wishlist', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const wishlist = await Wishlist.find({ user: req.user.id }).populate('product');
        res.json(wishlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wishlist', error });
    }
});

router.delete('/:productId', async (req, res) => {
    try {
        await Wishlist.findOneAndDelete({ user: req.user.id, product: req.params.productId });
        res.json({ message: 'Wishlist item removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing from wishlist', error });
    }
});

module.exports = router;