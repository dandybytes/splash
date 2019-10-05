import React from "react";
import "./InkPot.css";

const InkPot = ({color, splashColor}) => {
    return (
        <button
            className="InkPot"
            style={{backgroundColor: color}}
            onClick={() => splashColor(color)}
        ></button>
    );
};

export default InkPot;
