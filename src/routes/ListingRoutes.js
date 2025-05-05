const express = require('express');
const { createListing, getListingsByUserId } = require('../controllers/ListingController');

const router = express.Router();

router.post('/', createListing);
router.get('/:userId', getListingsByUserId);

module.exports = router;
