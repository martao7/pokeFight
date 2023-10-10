import express from 'express';

import {
    startGame, 
    getNextCity 
} from '../controllers/cityGame';

const gameRouter = express.Router();

gameRouter.route('/startGame').get(startGame);
gameRouter.route('/getNextCity').get(getNextCity);

export default gameRouter;
