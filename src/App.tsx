import React from 'react';
import './App.css';
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="app-wrapper">
        <Toolbar />
        <Content />
    </div>
  );
}

export default App;
