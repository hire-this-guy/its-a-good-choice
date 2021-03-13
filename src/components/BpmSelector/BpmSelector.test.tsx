import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BpmSelector from "./BpmSelector";
import { config } from "../../config";
import { TestId } from "../../testids";

beforeEach(()=> {
    render(<BpmSelector />);
})

test("render all the buttons", () => {
	expect(screen.queryAllByTestId(TestId.bpmSelector).length).toBe(config.bpm.length);
});

test("all buttons should have correct text", () => {
    config.bpm.forEach((bpm, index) => {
        expect(screen.getByText(`${config.bpm[index]} BPM`)).toBeInTheDocument()
    })
});

test("clicking buttons changes current bpm", () => {
    const buttons = screen.getAllByTestId(TestId.bpmSelector)
    buttons.forEach( async (button, index) => {
        fireEvent.click(button);
        await waitFor(() => screen.getByTestId(TestId.currentBpm));
        expect(screen.getByTestId(TestId.currentBpm)).toBe(config.bpm[index])
    })
});
