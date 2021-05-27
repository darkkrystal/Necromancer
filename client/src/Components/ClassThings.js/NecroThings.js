
const actionSearch = (action) =>{

let classNecro = 'necromancer'

let necroStats = {hp:5, atk:2, def:2, mp:20} 
let necroSpells = {
    beginnerSpells:{
        RaiseTheDead:{
            level:1,
            damage:1,
            // damage needs to stack with necromancer passive stacks
            ability:'',
            description:'Summons a corpse for each necromancer passive stack',
            mpCost:2,
            id:'N1'
                    
        },
        DeadFire:{
            level:1,
            damage:3,
            ability:'',
            description:'Channels spectral ghostflames of the underworld',
            mpCost:4,
            id:'N2'
        },

        DeathShriek:{
            level:1,
            damage:1,
            ability:'',
            description:'Basic attack that can restore some MP',
            mpCost:0,
            id:'N3'
        }    
        

            }

        }

}

export default actionSearch