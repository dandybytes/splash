import React from "react";
import {instructions, messageGameOver, messageGameWon} from "../data/settings";
import "./Message.css";

const Message = ({movesLeft, gameWon}) => {
    return (
        <p className={`Message${movesLeft && !gameWon ? " gameOn" : " gameOver"}`}>
            {gameWon ? messageGameWon : movesLeft ? instructions : messageGameOver}
        </p>
    );
};

export default Message;
