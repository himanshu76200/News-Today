import React from "react";
import './App.css';
import Banner from "./components/Banner.jsx"
import News from "./components/News";
import SearchBar from "./components/SearchBar";
import { UrlProvider } from "./UrlContext";

function App() {
  return (
    <div className="app">
      <Banner />
      <UrlProvider>
        <SearchBar />
        <News />
      </UrlProvider>
    </div>
  );
}

export default App;
