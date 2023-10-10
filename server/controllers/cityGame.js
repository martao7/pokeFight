import express from "express.js";
import axios from "axios";
import pokemons from "pokemonList.json";

export const startGame = async (req, res) => {
  try {
    // get cities, start session, getNextCity[0]
    req.session.geoIDs = randomCities();
    req.session.index = 0;
    res.send(getCity(req.session.geoIDs[req.session.index]));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNextCity = async (req, res) => {
  try {
    // either get next city for the session (if player has not had 7)
    // or
    // return results, make frontend go to finishPage (if player had 7)
    if (req.session.index === 6) {
      //finish page, end session
      req.session.destroy();
      res.clearCookie("connect.sid");
      res.send("go to finish page");
    } else if (req.session.index < 6) {
      req.session.index = req.session.index + 1;
      res.send(getCity(req.session.geoIDs[req.session.index]));
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// helper functions

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
};

const getCity = async (geoID) => {
  const response = await axios.get(
    `https://api.teleport.org/api/cities/geonameid:${geoID}`
  );
  //   console.log(response);
  return response.data;
};
