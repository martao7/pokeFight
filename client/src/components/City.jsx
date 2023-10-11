import axios from "axios";
import { useEffect, useState } from "react";
import geoindex from "/public/geoindex.js";
import getCity from "../services/httpService";
import httpService from "../services/httpService";

const City = () => {

  const [city, setCity] = useState();
  
  useEffect(() => {
    setCity(httpService.startGame());
  }, []);

  const next = async function () {
    setCity(httpService.getCity());
  }


  return (
    <>
      <h1 className="category-title">City Name</h1>
      <button onClick={next}>next</button>
      <div></div>
    </>
  );
};

export default City;
