import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {SearchBar} from "./Components/SearchBar";
import {WebsiteGrid} from "./Components/WebsiteGrid";


function App() {
    const[searchString, setSearchString] = useState("")
  return (
      <>
        <Header/>
        <SearchBar setString={setSearchString}/>
          <WebsiteGrid searchString={searchString}/>
      </>
  );
}

export default App;
