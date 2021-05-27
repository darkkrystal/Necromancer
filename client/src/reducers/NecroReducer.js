import {NECRO_SELECTED_START} from '../actions/statTypes'

const INITIAL_STATE = {
    className: null, spells:{beginnerSpells:{}}
}

const NecroReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case NECRO_SELECTED_START:
            return {...state, className:action.payload.className, spells:action.payload.necromancer_spells}
        default:
            return state
        
    }
}
export default NecroReducer;