import React from 'react';

function LocationPrompt({ onEnableLocation, onSearchManually }) {
    return (
        <div className="fixed bg-gray-500 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lgtext-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Allow Location Access</h2>
                <p className="text-gray-600 mb-6">To provide a better experience, we need access to your location.</p>
                <div className="space-y-4">
                    <button
                        onClick={onEnableLocation}
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg "
                    >
                        Enable Location
                    </button>
                    <button
                        onClick={onSearchManually}
                        className="w-full py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg"
                    >
                        Search Manually
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LocationPrompt;
