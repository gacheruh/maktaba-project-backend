const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Middleware to authenticate and set req.user (ensure you have this in your app)
const authenticateToken = require('../middleware/authenticateToken');

// Search for products by name (Public Access)
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const products = await Product.find({ title: { $regex: query, $options: 'i' } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error searching products', error });
    }
});

// Filter products by category and price range (Public Access)
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

// Batch upload products (Authenticated)
router.post('/batch', authenticateToken, async (req, res) => {
    try {
        const products = req.body.products;
        const createdProducts = await Product.insertMany(products);
        res.status(201).json({ message: "Products created successfully", createdProducts });
    } catch (error) {
        res.status(400).json({ message: "Error creating products", error });
    }
});


// POST a new product (Authenticated)
router.post('/', authenticateToken, async (req, res) => {
    const { title, price, description, category, image } = req.body;

    if (!image || !image.startsWith('http')) {
        return res.status(400).json({ message: "Invalid image URL" });
      }

    const newProduct = new Product({
        title,
        price,
        description,
        category,
        seller: req.user.id, // Automatically populates seller from authenticated user
        image, 
    });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ 
            message: 'Error creating product', 
            errors: Object.values(error.errors).map(err => err.message),
        });
    }
});

// PUT update a product by ID (Authenticated)
router.put('/:id', authenticateToken, async (req, res) => {
    const { title, price, description, category, image } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { title, price, description, category, image },
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

// DELETE a product by ID (Authenticated)
router.delete('/:id', authenticateToken, async (req, res) => {
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

module.exports = router;
