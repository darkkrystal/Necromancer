import {SET_GAMESTATE} from '../actions/statTypes'

// tracks the players progress through the game and is meant to prevent backing into a more
// favorable position or roll
let INITIAL_STATE= {"gameState":0, "playerState":0}
const GameStateReducer =(state=INITIAL_STATE, action)=>{
  switch(action.type){
      case SET_GAMESTATE:
          console.log(state,action.payload,'inside GameStateReducer reducer7777777777777777777777')
       return {...action.payload}

      default: return state
       
  }
}
export default GameStateReducer