import axios from 'axios';
import { useEffect, useState } from "react";
import geoindex from '/public/geoindex.js';




const City = () => {

//making the game logic: determine the length of each round, get random indexes (as many as the round length) and push into array called "round":
    const roundLength = 5;
    const round = [];
    for (let i=0; i<roundLength; i++) {
        const randomIndex = Math.floor(Math.random()*1000);
        if(round.includes(randomIndex)){
            round.push(Math.floor(Math.random()*1000));
        } else{round.push(randomIndex);}
    }
//getting the geonames IDs of the cities
    const geoID=[];
    round.map((id)=>{
        const city = geoindex[id];
        geoID.push(city);
    })
    console.log(geoID)
console.log(geoID[1])

//getting a single city from the API
const [city, setCity] = useState();
  useEffect(() => {
    const getCity = async () => {
      const response = await axios.get(
        `https://api.teleport.org/api/cities/geonameid:${geoID[0]}`
      );
console.log(response);
      setCity(response.data);
    };
    getCity();
  }, []);

  return (
    <>
      
      <h1 className="category-title">City Name</h1>
      <div>
      
       
      </div>
     
    </>
  );
};



export default City;
