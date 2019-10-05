import React from "react";
import "./Status.css";

const Status = ({movesLeft}) => {
    return (
        <div className="Status">
            <span className="Status-title">moves:</span>
            <span className="Status-figure">{movesLeft}</span>
        </div>
    );
};

export default Status;
