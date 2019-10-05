import React from "react";
import "./InkPot.css";

const InkPot = ({color}) => {
    return <button className="InkPot" style={{backgroundColor: color}}></button>;
};

export default InkPot;
