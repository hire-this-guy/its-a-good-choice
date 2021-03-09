import React from "react";
import "./Button.css";
import { useBPM } from "../../bpmProvider";

interface ButtonProps {
    bpm: number;
}

function Button(props: ButtonProps ) {
    const [bpm, setBpm] = useBPM();

    const additionalClassName = () => bpm === props.bpm ? "is-active" : "";

    return (
        <button className={`bpm-button ${additionalClassName()}`} onClick={() => setBpm(props.bpm)}>{props.bpm} BPM</button>
    );
}

export default Button;
