import React, { useState } from "react";
import "./Sound.css";
import { useBPM } from "../../bpmProvider";

function Sound() {
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [bpm] = useBPM();

    const initSound = () => {
    }

    const toggleSound = () => {
        console.log('toggle', soundEnabled)
        setSoundEnabled(!soundEnabled);
        console.log('toggle after set', soundEnabled)
    }

    initSound();

    return (
        <div className="sound" onClick={toggleSound}>
            {soundEnabled ? ("🔊") : ("🔈")}
        </div>
    );
}

export default Sound;
