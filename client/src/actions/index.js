import {SET_STATS} from './statTypes'

export const initStats = ()=>{
    console.log('STAT ACTION CREATER SENT OUT')
    return{ type:SET_STATS}
}