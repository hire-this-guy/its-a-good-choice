import React, { useEffect, useState } from "react";
import "./Sound.css";
import { useBPM } from "../../bpmProvider";
import { changeBPM, initSound, startSound, stopSound } from "../../metronome";

function Sound() {
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [bpm] = useBPM();


    useEffect(initSound, []);
    useEffect(() => {
        changeBPM(bpm)
    }, [bpm]);

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
        if (soundEnabled) {
            stopSound()
        } else {
            startSound()
        }
    }

    return (
        <div className="sound" onClick={toggleSound}>
            {soundEnabled ? ("🔊") : ("🔈")}
        </div>
    );
}

export default Sound;
