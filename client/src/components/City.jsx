import axios from "axios";
import { useEffect, useState } from "react";
import geoindex from "/public/geoindex.js";
import getCity from "../services/httpService"

const City = () => {

  //getting a single city from the API
  const [city, setCity] = useState();

  
  useEffect(() => {
    setCity(getCity(geoIDs));
  }, []);

  return (
    <>
      <h1 className="category-title">City Name</h1>
      <div></div>
    </>
  );
};

export default City;
