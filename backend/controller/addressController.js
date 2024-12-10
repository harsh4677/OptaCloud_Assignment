const Address = require('../models/Address');
const catchAsync = require('../utils/catchAsync');

const validateAddress = (addressData) => {
    const { houseNo, road, category, location } = addressData;
    if (!houseNo || !road || !category || !location?.lat || !location?.lng) {
        return 'All fields are required.';
    }
    return null;
};

// Add New Address
const addAddress = catchAsync(async (req, res) => {
    try {
        const { houseNo, road, category, location } = req.body;

        const validationError = validateAddress(req.body);
        if (validationError) {
            return res.status(400).json({ status: 'Fail', error: validationError });
        }

        const newAddress = new Address(req.body);
        await newAddress.save();

        res.status(201).json({
            status: 'Success',
            data: newAddress,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Fail',
            error: 'Server error. Please try again later.',
        });
    }
});

const getAllAddresses = catchAsync(async (req, res) => {
    try {
        const addresses = await Address.find();

        if (addresses.length === 0) {
            return res.status(404).json({
                status: 'Fail',
                message: 'No addresses found.',
            });
        }

        res.json({
            status: 'Success',
            data: addresses,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Fail',
            error: 'Server error. Please try again later.',
        });
    }
});

module.exports = {
    addAddress,
    getAllAddresses,
};
