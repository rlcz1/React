import styled from "@emotion/styled";
import { parseDate } from "@storybook/blocks";
import { useRef, useState } from "react";

const Storage = () => {
    const [data, setData] = useState({
        id: "",
        time: "",
        expire: ""
    });

    const SetData = () => {
        const date = new Date();
        const time = date.getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        const expire = date.getTime() + (1 * 60 * 1000);

        const updateData = {
            ...data,
            time: time,
            expire: expire
        }
        setData(updateData); // 현재 시간에서 1분 후로 설정
        localStorage.setItem("Datas", JSON.stringify(updateData));
    }

    const GetData = () => {
        const storedData = localStorage.getItem("Datas");

        if (storedData) {
            const parsedData = JSON.parse(storedData);

            // 현재 시간과 비교하여 데이터가 만료되었는지 확인
            if (parsedData.expire && new Date().getTime() > parsedData.expire) {
                // 데이터가 만료되었으면 삭제 또는 다시 설정
                localStorage.removeItem("Datas");
            } else {
                // 데이터가 유효한 경우 사용
                console.log("Stored Data:", parsedData);
            }
        } else {
            console.log("Data not found or expired.");
        }
    }

    console.log(data);

    return (
        <div>
            <input type="text" placeholder="id" onChange={(e) => setData({ ...data, id: e.target.value })} />
            <button onClick={SetData}>set Storage</button>
            <button onClick={GetData}>get Storage</button>
        </div>
    )
}

export default Storage;