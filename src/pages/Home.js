import React, { useState } from "react";
import { apiGET } from "../misc/Config";
import "./Home.css";
import Navbar from "../components/Navbar";
import MemeCard from "./MemeCard";

const Home = () => {
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);
  const handleInp = (e) => {
    setInp(e.target.value);
  };
  const Search = () => {
    const api_key = "DyFddN73SW_0s0buG_NDpWBQWHPMN9F0B9vCT2OqIzo";
    apiGET(`/search/photos?query=${inp}&client_id=${api_key}`).then((res) => {
      console.log(res);
      setData(res.results);
    });
  };
  function onKeyDown(e) {
    if (e.keyCode === 13) {
      Search();
    }
  }

  return (
    <div className="container">
     <Navbar Search={Search}
      handleInp={handleInp}
      onKeyDown={onKeyDown}
      inp={inp}/>
     
      
     
      <div className="photos">
        {data.map((value, index) => {
          return (
            <MemeCard value={value}/> 
          );
        })}
      </div>
    </div>
  );
};

export default Home;
