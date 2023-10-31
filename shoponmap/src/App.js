import React from "react";
import "../src/styles/SearchBar.css"
import "../src/styles/App.css"
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Map/>
    </div>
  );
}

export default App;
