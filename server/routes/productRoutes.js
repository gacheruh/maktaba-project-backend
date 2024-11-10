const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const { name, price, description, category } = req.body;
    const newProduct = new Product({ name, price, description, category });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
});

// PUT update a product by ID
router.put('/:id', async (req, res) => {
    const { name, price, description, category } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, description, category },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

// Search for products by name
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const products = await Product.find({ name: { $regex: query, $options: 'i' } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error searching products', error });
    }
});

// Filter products by category and price range
router.get('/filter', async (req, res) => {
    const { category, priceRange } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (priceRange) filter.price = { $lte: priceRange };

    try {
        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering products', error });
    }
});

module.exports = router;
