const mongoose = require('mongoose');

// Correct database name without special characters
mongoose.connect('mongodb://localhost:27017/ecommerce');
