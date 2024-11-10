// models/Wishlist.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User who owns the wishlist
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the Product added to the wishlist
    addedAt: { type: Date, default: Date.now } // Optional: to track when item was added
});

// Ensure a user cannot add the same product to their wishlist multiple times
wishlistSchema.index({ user: 1, product: 1 }, { unique: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);
