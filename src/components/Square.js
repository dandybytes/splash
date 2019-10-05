import React from "react";
import "./Square.css";

const Square = ({color}) => {
    return <div className="Square" style={{backgroundColor: color}}></div>;
};

export default Square;
