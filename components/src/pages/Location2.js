import { useState } from "react";

function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            const now = new Date();
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        err: 0,
                        time: now.toLocaleTimeString(),
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    console.log(position.coords.latitude, position.coords.longitude);
                },
                (err) => {
                    resolve({
                        err: -1,
                        latitude: -1,
                        longitude: -1,
                    });
                },
                { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
            );
        } else {
            reject({ error: -2, latitude: -1, longitude: -1 });
        }
    });
}

const Location2 = () => {
    const [locationInfo, setLocationInfo] = useState(null);

    const handleGetLocation = async () => {
        try {
            const info = await getLocation();
            setLocationInfo(info);
        } catch (error) {
            console.error("Error getting location:", error);
        }
    };

    return (
        <div>
            <button onClick={handleGetLocation}>위치 정보 가져오기</button>
            {locationInfo && locationInfo.latitude !== -1 ? (
                <div>
                    <p>위도: {locationInfo.latitude}</p>
                    <p>경도: {locationInfo.longitude}</p>
                </div>
            ) : (
                <p>위치 정보를 가져올 수 없습니다.</p>
            )}
        </div>
    );
};

export default Location2;