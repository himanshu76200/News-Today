import React from "react";
import './App.css';
import Banner from "./components/Banner.jsx"
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <Banner />
      <News />
    </div>
  );
}

export default App;
