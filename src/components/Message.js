import React from "react";
import {instructions, messageGameOver} from "../data/settings";
import "./Message.css";

const Message = ({movesLeft}) => {
    return (
        <p className={`Message${movesLeft ? " gameOn" : " gameOver"}`}>
            {movesLeft ? instructions : messageGameOver}
        </p>
    );
};

export default Message;
