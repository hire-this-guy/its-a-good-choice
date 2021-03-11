let modulator: OscillatorNode;
let source: OscillatorNode;
let context: AudioContext;

export const initSound = ():void => {
    context = new AudioContext();
    source = context.createOscillator();
    source.frequency.value = 80;
    modulator = context.createOscillator();
    modulator.type="square";

    modulator.connect(context.destination)

    const gain1 = context.createGain();
    const gain2 = context.createGain();

    source.connect(gain1);
    gain1.connect(context.destination);

    modulator.connect(gain2);
    gain1.gain.value = 0.5;
    gain2.gain.value = 0.5;
    gain2.connect(gain1.gain);

    source.start();
    modulator.start();
    context.suspend();
}

export const changeBPM = (bpm: number): void => {
    modulator.frequency.value = bpm/60; // frequency is in Hz
}

export const startSound = () => {
    context.resume();
}

export const stopSound = () => {
    context.suspend();
}
