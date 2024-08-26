// Import necessary modules
const express = require('express');
const cors =require("cors");
const app = express();


// Import database configuration and User model
require('./db/config');
const User = require('./db/user');

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    console.error("Registration Error:", error);  // Log the actual error for debugging
    res.status(500).send({ error: 'Error registering user' });
  }
});


// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
