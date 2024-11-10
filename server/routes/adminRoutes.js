const express = require('express');
const User = require('../models/User');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken'); // Middleware to verify JWT
const authorizeRole = require('../middleware/authorizeRole'); // Middleware to check user role

// Middleware to ensure the user is an admin
router.use(authenticateToken);
router.use(authorizeRole('admin'));

// GET all users (Admin only)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude passwords
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// DELETE a user by ID (Admin only)
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

// Additional admin routes can be added here

module.exports = router;
