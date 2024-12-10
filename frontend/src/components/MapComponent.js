import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function MapComponent({ location }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <div className="text-red-500">Error loading maps. Please try again later.</div>;
    if (!isLoaded) return <div className="text-gray-500">Loading map...</div>;

    return (
        <div className="relative">
            <GoogleMap
                center={location}
                zoom={14}
                mapContainerStyle={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
            >
                <Marker position={location} draggable={true} />
            </GoogleMap>
            <div className="absolute top-0 left-0 p-4 bg-white text-gray-700 rounded-md">
                <h3 className="text-lg font-semibold">Location Map</h3>
                <p className="text-sm">Drag the marker to adjust the location</p>
            </div>
        </div>
    );
}

export default MapComponent;
