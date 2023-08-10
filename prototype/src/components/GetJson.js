import { useEffect, useState } from "react";

const GetJson = ( ) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:8080/kjs/get_congestion/restaurant2',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET'
                }
            );
            const result = await res.json();
            return result;
        }
        fetchData().then((res) => {
            setData(res);
        });
    }, []);

    return (
        <div>
            {data.map(item => (
                <h1 style={{fontSize: 14, lineHeight:1, fontFamily:'sans-serif'}}>{item.connected}/{item.capacity}</h1>
            ))}
        </div>
    );
}

export default GetJson;