require('dotenv').config(); // MUST be first
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

console.log('Mongo URI:', MONGODB_URI); // Debug: should not be undefined

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => res.send('Server is running'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));