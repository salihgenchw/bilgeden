import React, {useState,  useEffect } from 'react';
import './App.css';
import { HomeList } from './components/HomeList';
import { Navbar } from './components/Navbar';


let App = () => {

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
      <div className="container">
        <HomeList relatedHome={relatedHome}/> {/* Json veri Props aracılığı ile Homelist Componentine gönderildi.*/}
      </div>
      
    </div>
  );
}

export default App;
