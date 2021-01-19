import React from "react";

interface Props {
    id: number;
    value: string;
}

function Test({id,value}: Props) {
    return (
        <div>
            {
                id
            }
        </div>
    );
}

export default Test;

