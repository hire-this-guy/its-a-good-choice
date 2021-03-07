import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import BpmSelector from "./components/BpmSelector/BpmSelector";

function App() {
  return (
    <div className="App">
        <Header/>
        <BpmSelector/>
    </div>
  );
}

export default App;
