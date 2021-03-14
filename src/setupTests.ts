import "@testing-library/jest-dom";

// js-dom does not support AudioContext hence the mock
jest.mock("./metronome", () => ({
	initSound: jest.fn(),
	changeBPM: jest.fn(),
	startSound: jest.fn(),
	stopSound: jest.fn(),
}));
