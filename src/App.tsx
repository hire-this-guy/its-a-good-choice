import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import BpmSelector from "./components/BpmSelector/BpmSelector";
import Visualisation from "./components/Visualisation/Visualisation";

function App() {
  return (
    <div className="App">
        <Header/>
        <Visualisation/>
        <BpmSelector/>
    </div>
  );
}

export default App;
