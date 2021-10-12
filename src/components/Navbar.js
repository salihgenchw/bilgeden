import React from "react";
import Logo from "../images/bilgeden_Logo.png";
import "./Navbar.css";

export const Navbar = ({allHomes}) => {
  
  let allHomeCity = [];

  if(allHomes){
    allHomeCity = Array.from(new Set(allHomes.map(t=>t.city)));
  }

  let cityChange = () => {
    
  }
  
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" className="py-2" width={170} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <select className="form-select" aria-label="Default select example" onChange={cityChange}>
              <option defaultValue>Şehir Seçiniz</option>
                {allHomeCity.map((city,index)=>
                  <option key={index}>{city}</option>
                )}
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};
