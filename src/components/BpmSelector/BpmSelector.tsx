import React from "react";
import { config } from "../../config";
import Button from "../Button/Button";
import "./BpmSelector.css";
function BpmSelector() {

    // TODO naming
    const buttons = config.bpm.map((bpm, index) => {
            return <Button bpm={bpm} key={index} />;
        })
    return (
        <div className="bpm-selector">
            {buttons}
        </div>
    );
}

export default BpmSelector;
