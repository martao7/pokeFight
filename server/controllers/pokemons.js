import express from 'express.js';

import pokemons from 'pokemonList.json';


export const getAllpokemons = async(req, res) => {
    try {
        const result = await pool.query('SELECT * from pokemons');
        res.json(result);
    } catch (error) {
        res.status(500).json({message:"something broke"});
    }
};

export const getPokemonById = async(req, res) => {
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * from pokemons WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({message: 'something broke'});
    }
};

