import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({colors}) => {
    return (
        <div className="Board">
            {colors.map((color, index) => (
                <Square key={index} color={color} />
            ))}
        </div>
    );
};

export default Board;
