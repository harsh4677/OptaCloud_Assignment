import React, { useState } from 'react';
import LocationPrompt from './components/LocationPrompt';
import MapComponent from './components/MapComponent';
import AddressForm from './components/AddressForm';
import ManageAddresses from './components/ManageAddresses';

function App() {
    const [location, setLocation] = useState(null);
    const [addresses, setAddresses] = useState([]);

    const handleEnableLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => console.error(error),
            { enableHighAccuracy: true }
        );
    };

    const handleSaveAddress = (addressDetails) => {
        setAddresses([...addresses, addressDetails]);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Address Management</h1>

            {!location && (
                <div className="w-full max-w-md mx-auto">
                    <LocationPrompt onEnableLocation={handleEnableLocation} />
                </div>
            )}

            {location && (
                <div className="w-full max-w-4xl mx-auto space-y-8">
                    <MapComponent location={location} />
                    
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Address</h2>
                        <AddressForm onSaveAddress={handleSaveAddress} />
                    </div>

                    <div className="bg-white p-6 rounded-lg ">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Addresses</h2>
                        <ManageAddresses addresses={addresses} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
