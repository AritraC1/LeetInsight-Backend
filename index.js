const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const portfinder = require('portfinder');
const leetcodeRoute = require('./Routes/LeetcodeRoute.js');

dotenv.config();

const app = express();

// PORT
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/api/leetcode', leetcodeRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});