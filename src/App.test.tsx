import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { config } from "./config";
import { TestId } from "./testids";

test("shows selected bpm at start", async () => {
	render(<App />);
	await waitFor(() => screen.getByTestId(TestId.currentBpm));
	expect(screen.getByTestId(TestId.currentBpm).textContent).toBe(
		`${config.bpm[0]}`
	);
});
