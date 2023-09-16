import React from "react";
import { useParams } from "react-router-dom";

const ViewEmoji = ({  }) => {
    const p = useParams();
    console.log(p);

    return(
        <div>
            {p.Emoji}
        </div>
    );
}

export default ViewEmoji;