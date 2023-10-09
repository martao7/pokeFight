import axios from "axios";geoIDs
import { useEffect, useState } from "react";
import geoindex from "/public/geoindex.js";
import getCity from "../services/httpService"

const City = () => {
  //making the game logic: determine the length of each round, get random indexes (as many as the round length) and push into array called "round":
  const randomCities = () => {
    const roundLength = 5;
    const round = [];
    for (let i = 0; i < roundLength; i++) {
      const randomIndex = Math.floor(Math.random() * 1000);
      if (round.includes(randomIndex)) {
        round.push(Math.floor(Math.random() * 1000));
      } else {
        round.push(randomIndex);
      }
    }
    //getting the geonames IDs of the cities
    const geoIDs = [];
    round.map((id) => {
      const city = geoindex[id];
      geoIDs.push(city);
    });
    return geoIDs;
  }

  const geoIDs = randomCities();

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
