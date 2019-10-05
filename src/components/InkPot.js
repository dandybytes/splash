import React from "react";
import "./InkPot.css";

const InkPot = ({color, handleColorButtonClick}) => {
    return (
        <button
            className="InkPot"
            style={{backgroundColor: color}}
            onClick={() => handleColorButtonClick(color)}
        ></button>
    );
};

export default InkPot;
