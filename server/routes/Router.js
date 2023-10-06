import express from 'express';


import {
    getAllpokemons, 
    getPokemonById 
} from '../controllers/pokemons.js';

const Router = express.Router();

Router.route('/').get(getAllpokemons);
Router.route('/:id').get(getPokemonById);


export default Router;