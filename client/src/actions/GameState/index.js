import { SET_GAMESTATE } from "../statTypes"


export const AddToSetGameState = (gameState)=>{
  console.log(gameState, 'this is the action')
for (const state in gameState){
  
  gameState[state]= gameState[state]+1;
  console.log(state, gameState[state] )
}
    
    return {
        type:SET_GAMESTATE,
        payload:gameState
    }
}