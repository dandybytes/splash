import React from "react";
import {gameColors} from "../data/settings";
import "./Controls.css";
import InkPot from "./InkPot";

const Controls = ({handleColorButtonClick}) => {
    return (
        <div className="Controls">
            {gameColors.map((color, index) => (
                <InkPot color={color} key={index} handleColorButtonClick={handleColorButtonClick} />
            ))}
        </div>
    );
};

export default Controls;
