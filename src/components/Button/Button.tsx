import React from "react";
import "./Button.css";
import { useBPM } from "../../bpmProvider";
import { TestId } from "../../testids";

interface ButtonProps {
	bpm: number;
}

function Button(props: ButtonProps) {
	const [bpm, setBpm] = useBPM();

	const additionalClassName = () => (bpm === props.bpm ? "is-active" : "");

	return (
		<button
			className={`bpm-button ${additionalClassName()}`}
			onClick={() => setBpm(props.bpm)}
			data-testid={TestId.bpmSelector}
		>
			{props.bpm} BPM
		</button>
	);
}

export default Button;
