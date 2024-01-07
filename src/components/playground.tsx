"use client"
import React from "react";
import { ChangeEvent, useState } from "react";

const Playground = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    React.useEffect(() => {
        console.log("SLSLS");
    }, []);
    
    const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        // Generate a URL for the selected image
        const imageUrl = URL.createObjectURL(file);

        console.log(imageUrl);
        setImageUrl(imageUrl);
    }

    return (
        <button onClick={() => console.log("SLSLS")}>sss</button>
    )
}

export default Playground