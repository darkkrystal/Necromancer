import {SET_NECRO_STATS} from '../statTypes'
import {ITEM_STAT_CHANGES} from '../statTypes'


export const ItemsStatInfluence = (items,stats) =>{
    let result = items.filter(item=>item[0]===item[0])
    // for now just pulling the only item in there
    //to do MAP OVER THE ITEMS THEN FEED THEM INO THE STAT EDITING BELOW
    const  ExtractedObject  = Object.assign({},...result)
    console.log(ExtractedObject, 'this is a single item outside of the array')
    //THE STATS EDITOR
    Object.keys(stats).map((key1,index)=>{        
       return Object.keys(ExtractedObject).map((key2,index)=>{       
           if(key1 === key2){
               stats[key1]+=ExtractedObject[key2]
           }
        })    
    })

    const newStats = stats 
    console.log(stats,'at the end')
    return function(dispatch){
        dispatch( {type:ITEM_STAT_CHANGES,
            payload:newStats})
       
}}

export const setFirstStats = (classname) =>{
    if(classname === 'Necromancer'){
        const stats = {hp:20, atk:2, def:2, mp:20}
        console.log(stats,'inside actions') 
        console.log('THIS ACTION WAS CALLLEDDDDDDD')
        return{
            type:SET_NECRO_STATS,
            payload:stats
        }
    }
}
