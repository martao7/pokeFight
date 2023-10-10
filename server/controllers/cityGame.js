import express from 'express.js';

import pokemons from 'pokemonList.json';


export const startGame = async(req, res) => {
    try {
        // get cities, start session, getNextCity[0]
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getNextCity = async(req, res) => {
    const {sess_id} = req.params;
    try {
        // either get next city for the session (if player has not had 7)
        // or 
        // return results, make frontend go to finishPage (if player had 7)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};




