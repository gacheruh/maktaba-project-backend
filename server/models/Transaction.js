const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
  transactionDate: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], default: 'credit_card' },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;

