import React from "react";
import "./Visualisation.css";
import { useBPM } from "../../bpmProvider";


function Visualisation() {
    const [bpm] = useBPM();
    const style = {
        animationDuration: `${60/bpm}s`
    }
    return (
        <div className="circle">
            {bpm}
            <div style={style} className="circle__shadow"/>
        </div>
    );
}

export default Visualisation;
