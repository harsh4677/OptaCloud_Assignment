const express = require('express');
const { addAddress, getAllAddresses } = require('../controller/addressController');
const router = express.Router();


router.post('/add', addAddress);
router.get('/all', getAllAddresses);

module.exports = router;
