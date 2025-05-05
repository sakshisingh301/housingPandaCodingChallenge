const express = require('express');
const db = require('./db/mysql');
require('dotenv').config();

const app = express();
app.use(express.json());



// Routes
const listingRoutes = require('./routes/ListingRoutes');
app.use('/api/listings', listingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));