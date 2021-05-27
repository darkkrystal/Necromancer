import {combineReducers} from 'redux';

import StatReducer from './statReducer';
import NecroReducer from './NecroReducer';
import itemsReducer from './ItemsReducer';
import GameStateReducer from './GameStateReducer';


export default combineReducers({
    stats :StatReducer,
    necro :NecroReducer,
    items :itemsReducer,
    gameState: GameStateReducer
})