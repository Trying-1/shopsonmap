import React from "react";
import "../src/styles/SearchBar.css"
import "../src/styles/App.css"
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Map/>
    </div>
  );
}

export default App;
