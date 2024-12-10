import React, { useState } from 'react';

function AddressForm({ onSaveAddress }) {
    const [addressDetails, setAddressDetails] = useState({
        houseNo: '',
        road: '',
        category: 'Home',
    });

    const [errors, setErrors] = useState({
        houseNo: '',
        road: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails({ ...addressDetails, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!addressDetails.houseNo) newErrors.houseNo = 'House/Flat/Block No. is required';
        if (!addressDetails.road) newErrors.road = 'Apartment/Road/Area is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSave = () => {
        if (validateForm()) {
            onSaveAddress(addressDetails);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Add Address</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">House/Flat/Block No.</label>
                    <input
                        type="text"
                        name="houseNo"
                        id="houseNo"
                        placeholder="Enter house/flat/block number"
                        value={addressDetails.houseNo}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-2 border ${errors.houseNo ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.houseNo && <p className="text-sm text-red-500">{errors.houseNo}</p>}
                </div>
                <div>
                    <label htmlFor="road" className="block text-sm font-medium text-gray-700">Apartment/Road/Area</label>
                    <input
                        type="text"
                        name="road"
                        id="road"
                        placeholder="Enter apartment/road/area"
                        value={addressDetails.road}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-2 border ${errors.road ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.road && <p className="text-sm text-red-500">{errors.road}</p>}
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={addressDetails.category}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="Home">Home</option>
                        <option value="Office">Office</option>
                        <option value="Friends & Family">Friends & Family</option>
                    </select>
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="mt-4 px-6 py-2 text-white font-semibold rounded-lg"
                    >
                        Save Address
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddressForm;
