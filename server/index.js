// server/index.js
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const requestRoutes = require('./routes/requestRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // You can configure this if needed: cors({ origin: 'http://localhost:3000' })
app.use(express.json());

// Routes
app.use('/api', requestRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('🎉 API is running...');
});

// Server Start
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
