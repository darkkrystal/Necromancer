import { SET_ITEM_SLOT } from "../statTypes"

import ItemList from "../../Components/Items"


export const setItemSlot = (itemId)=>{
    let result = ItemList.filter(item=>item.id === itemId)
    const  ExtractedItem = Object.assign({},...result)
    
    console.log(ExtractedItem, 'THIS IS THE CONVERTED OBJECT')
    console.log(result, 'result happenz in item slot action')
    return {
        type:SET_ITEM_SLOT,
        payload:ExtractedItem
    }
}