import React from 'react';

function ManageAddresses({ addresses }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Manage Addresses</h3>
            <ul className="space-y-4">
                {addresses.map((addr, idx) => (
                    <li key={idx} className="p-4 bg-white shadow-md rounded-lg">
                        <p className="text-lg font-medium text-gray-800">{addr.houseNo}, {addr.road}</p>
                        <p className="text-sm text-gray-500">{addr.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageAddresses;
