import React, { useEffect, useMemo, useState } from 'react'
import useCurrentLocation from '../hooks/useCurrentPosition'

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
}

const Location = () => {
    const { location, error } = useCurrentLocation(geolocationOptions);

    useEffect(() => {
        if (location) {
            console.log('Location:', location);
        }
    }, [location]);

    return (
        <div>
            {location ? (
                <div>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </div>
            ) : (
                error ? (<div>Error: {error}</div>) : (<div>Loading...</div>)
            )}
        </div>
    );
}

export default Location;


