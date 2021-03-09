import React from "react";
import "./Songlist.css";
import { useBPM } from "../../bpmProvider";
import { data } from "../../data";

function Songlist() {
    const [bpm] = useBPM();

    const songs = data
        .filter((song) => song[2] === bpm)
        .map((song, index) => {
            return (<li className="songlist__entry" key={index}>{song[0]} ({song[1]})</li>)
        });
    const hasSongs = songs.length > 0;

    return (
        <>
            {hasSongs && (<div className="songlist">
                <h2 className="songlist__title">Songs that use this BPM:</h2>
                <ul className="songlist__list">
                    {songs}
                </ul>
            </div>)}
        </>)
}

export default Songlist;
