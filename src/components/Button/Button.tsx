import React from "react";
import "./Button.css";

interface ButtonProps {
    bpm: number;
}

function Button(props: ButtonProps ) {
    return (
        <button className="bpm-button">{props.bpm} BPM</button>
    );
}

export default Button;
