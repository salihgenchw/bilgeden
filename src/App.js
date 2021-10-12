import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { NotFoundPage } from './components/404/NotFoundPage';
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

    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar allHomes={allHomes} />  {/* Citylist Dropdown'ı Navbarın içerisinde olduğu için City bilgileri propsla gönderildi.*/}
        </header>
        <div className="container">

          <Switch>
            <Route path='/' exact>
              <HomeList allHomes={allHomes} /> {/* Json veri Props aracılığı ile Homelist Componentine gönderildi.*/}
            </Route>

            <Route>
              <NotFoundPage />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>


  );
}

export default App;
