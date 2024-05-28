import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {SearchBar} from "./Components/SearchBar";
import {WebsiteGrid} from "./Components/WebsiteGrid";


function App() {
  return (
      <>
        <Header/>
        <SearchBar/>
          <WebsiteGrid/>
      </>
  );
}

export default App;
