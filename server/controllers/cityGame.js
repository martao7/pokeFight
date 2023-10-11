import express from "express.js";
import axios from "axios";
import pokemons from "pokemonList.json";

const ROUND_LENGTH = 5;

export const startGame = async (req, res) => {
  try {
    req.session.geoIDs = randomCities();
    req.session.index = 0;
    res.send(getCity(req.session.geoIDs[req.session.index]));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNextCity = async (req, res) => {
  try {
    if (req.session.index === ROUND_LENGTH-1) {
      req.session.destroy();
      res.clearCookie("connect.sid");
      //to do: return results 
      res.send("go to finish page");
    } else if (req.session.index < ROUND_LENGTH-1) {
      req.session.index = req.session.index + 1;
      res.send(getCity(req.session.geoIDs[req.session.index]));
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






// helper functions

const randomCities = () => {
  const roundLength = ROUND_LENGTH;
  const round = [];
  for (let i = 0; i < roundLength; i++) {
    const randomIndex = Math.floor(Math.random() * 1000);
    if (round.includes(randomIndex)) {
      round.push(Math.floor(Math.random() * 1000));
    } else {
      round.push(randomIndex);
    }
  }
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
  return response.data;
};
