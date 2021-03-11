import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import BpmSelector from "./components/BpmSelector/BpmSelector";
import Visualisation from "./components/Visualisation/Visualisation";
import { BPMProvider } from "./bpmProvider";
import Songlist from "./components/Songlist/Songlilst";
import Sound from "./components/Sound/Sound";

function App() {
  return (
  <div className="app-container">
    <div className="app">
        <Header/>
        <BPMProvider>
            <Visualisation/>
            <BpmSelector/>
            <Songlist/>
            <Sound/>
        </BPMProvider>
    </div>
  </div>
  );
}

export default App;
