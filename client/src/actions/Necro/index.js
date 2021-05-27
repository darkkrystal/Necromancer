import {NECRO_SELECTED_START} from '../statTypes'


export const necroSelectedStart = ()=>{ 
   const  necromancer_spells ={
        beginnerSpells:{
            RaiseTheDead:{
                level:1,
                damage:5,
                ability:'',
                description:'Summons 2 temporary ally zombies',
                mpCost:2,
                id:'N1'    
            },
            DeadFire:{
                level:1,
                damage:10,
                ability:'',
                description:'Channels spectral ghostflames of the underworld',
                mpCost:3,
                id:'N2'
            },
            DeathShriek:{
                level:1,
                damage:1,
                ability:'',
                description:'Basic attack',
                mpCost:0,
                id:'N3'
            }
        }
    }
   const necroStartPackage = {className:'necromancer',necromancer_spells}
   

    return {
        type:NECRO_SELECTED_START,
        payload: necroStartPackage
    }
}




