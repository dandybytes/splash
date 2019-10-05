import React from "react";
import {gameColors} from "../data/settings";
import "./Controls.css";
import InkPot from "./InkPot";

const Controls = ({splashColor}) => {
    return (
        <div className="Controls">
            {gameColors.map((color, index) => (
                <InkPot color={color} key={index} splashColor={splashColor} />
            ))}
        </div>
    );
};

export default Controls;
