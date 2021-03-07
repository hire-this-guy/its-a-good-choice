import React from "react";
import "./Button.css";
import { useBPM } from "../../bpmProvider";

interface ButtonProps {
    bpm: number;
}

function Button(props: ButtonProps ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setBpm] = useBPM();
    return (
        <button className="bpm-button" onClick={() => setBpm(props.bpm)} >{props.bpm} BPM</button>
    );
}

export default Button;
