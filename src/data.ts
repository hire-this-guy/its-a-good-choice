import { config } from "./config";

export type SongEntry = [string, string, typeof config.bpm[number]];

/*
I took a liberty of removing a couple of songs form original bpm.json because typescirpt told me they are not going to be needed
 */
export const data:SongEntry[] = [
    ["Bohemian Rhapsody", "Queen", 72],
    ["Rap God", "Eminem", 72],
    ["The Scientist", "Coldplay", 74],
    ["Sultans of Swing", "Dire Straits", 74],
    ["High Hopes", "Panic! at the Disco", 82],
    ["Take Me Home, Country Roads", "John Denver", 82],
    ["Zombie", "The Cranberries", 84],
    ["Till I Collapse", "Eminem", 84],
    ["Orion", "Metallica", 128],
    ["Sweet Child o' Mine", "Guns N' Roses", 128],
    ["Uprising", "Muse", 128],
    ["Beat It", "Michael Jackson", 138],
    ["Viva la Vida", "Coldplay", 138],
]
