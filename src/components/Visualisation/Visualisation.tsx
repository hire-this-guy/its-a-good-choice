import React from "react";
import "./Visualisation.css";
import { useBPM } from "../../bpmProvider";

function Visualisation() {
    const [bpm] = useBPM();
    return (
        <div className="circle">{bpm}</div>
    );
}

export default Visualisation;
