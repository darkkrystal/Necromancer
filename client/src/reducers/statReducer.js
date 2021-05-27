import {SET_STATS} from '../actions/statTypes'
import{ITEM_STAT_CHANGES} from '../actions/statTypes'
import {SET_NECRO_STATS} from '../actions/statTypes'


const INITIAL_STATE = {hp:0, atk:0, def:0, mp:0} 

const StatReducer = (state=INITIAL_STATE,action)=>{
switch(action.type){

    case SET_STATS:
       
        return state

    case SET_NECRO_STATS:
        return {...action.payload}

    case ITEM_STAT_CHANGES:
        return{...state,...action.payload}
        // this takes the items from action stats and passes the state back

    default:
        return state
}
}
export default StatReducer