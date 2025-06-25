const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const portfinder = require('portfinder');
const leetcodeRoute = require('./Routes/LeetcodeRoute.js');

dotenv.config();

const app = express();

// PORT
const Port = parseInt(process.env.PORT) || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/api/leetcode', leetcodeRoute);

// Start server
portfinder.getPort({ port: Port, stopPort: Port + 100 }, (err, port) => {
  if (err) {
    console.error('Error finding port:', err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});