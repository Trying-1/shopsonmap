import React from "react";
import "../src/styles/SearchBar.css"
import "../src/styles/App.css"
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <Profile/>
      <Sidebar/>
      <Map/>
    </div>
  );
}

export default App;
