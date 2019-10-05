import React from "react";
import {gameColors} from "../data/settings";
import "./Controls.css";
import InkPot from "./InkPot";

const Controls = () => {
    return (
        <div className="Controls">
            {gameColors.map((color, index) => (
                <InkPot color={color} key={index} />
            ))}
        </div>
    );
};

export default Controls;
