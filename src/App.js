import './App.css';
import { Navbar } from './components/Navbar';
import React, {useState,  useEffect } from 'react';


function App() {

const [relatedHome, setrelatedHome] = useState(undefined);

useEffect(() => {
  async function loadData() {
    let jresponse = await fetch("./data.json");
    let data = await jresponse.json();

    let randomHomeIndex=Math.floor(Math.random()*data.length);
    setrelatedHome(data[randomHomeIndex]);
  }
  loadData();

}, [])



  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
