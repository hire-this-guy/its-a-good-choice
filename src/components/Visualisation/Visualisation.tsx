import React from "react";
import "./Visualisation.css";
import { useBPM } from "../../bpmProvider";
import { TestId } from "../../testids";

function Visualisation() {
	const [bpm] = useBPM();
	const style = {
		animationDuration: `${60 / bpm}s`,
	};
	return (
		<div className="circle" data-testid={TestId.currentBpm}>
			{bpm}
			<div style={style} className="circle__shadow" />
		</div>
	);
}

export default Visualisation;
