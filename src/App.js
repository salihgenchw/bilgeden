import React, {useState,  useEffect } from 'react';
import './App.css';
import { HomeList } from './components/HomeList';
import { Navbar } from './components/Navbar';


let App = () => {

const [allHomes, setallHomes] = useState(undefined);

useEffect(() => {
  async function loadData() {
    let jresponse = await fetch("./data.json");
    let data = await jresponse.json();

    setallHomes(data);
    
  }
  loadData();

}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar allHomes={allHomes}/>  {/* Citylist Dropdown'ı Navbarın içerisinde olduğu için City bilgileri propsla gönderildi.*/}
      </header>
      <div className="container">
        <HomeList allHomes={allHomes}/> {/* Json veri Props aracılığı ile Homelist Componentine gönderildi.*/}
      </div>
      
    </div>
  );
}

export default App;
