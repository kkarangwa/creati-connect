const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/portfolios', require('./routes/portfolioRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
