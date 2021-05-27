import {SET_ITEM_SLOT} from '../actions/statTypes'

const itemsReducer =(state=[], action)=>{
    switch(action.type){
        case SET_ITEM_SLOT:
         return [...state,action.payload]

        default: return state
         
    }
}
export default itemsReducer