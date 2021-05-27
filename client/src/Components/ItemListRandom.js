import React from 'react'
import itemContainer from './Items'
import { useSelector, useDispatch } from 'react-redux'
import { setItemSlot } from '../actions/Items/Index'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ItemListRandom = React.memo(() => {
  const jobClass = useSelector(state => state.necro.className)
  const dispatch = useDispatch()

  // ************************************************
  //THIS COMPONENTT IS MOMOIZED IT WILL ONLY RENDER ONE TIME
  //************************************************** */

  // this i the array of ittems the char uses and a function that
  // sets 3 random items and returns them
  let arrforitems = []
  const randomItemArrayIndex = () => {
    while (arrforitems.length < 3) {
      var r = Math.floor(Math.random() * 9)
      if (arrforitems.indexOf(r) === -1) {
        arrforitems.push(r)
      }
    }
  }
  // this creates an array of three random index' for random items
  randomItemArrayIndex()
  // maps over the items as it renders them
  // item list is going to have to be moved into somewhere else.
  return (arrforitems.map((key, index) => {
    const itemList = itemContainer
    return (
      <Card border='danger' className="bg-dark text-white" style={{ textAlign: 'center', width: '18rem', display: 'inline-block', margin: '1rem' }} >
        <Card.Img src='' variant="top" href="#">
          {/* <img src=""></img> */}
        </Card.Img>
        <Card.Body >
          <Link
            onClick={
              () => { dispatch(setItemSlot(itemList[key].id)) }}
            to={`/${jobClass}/start`}
            className="header" >
            {itemList[key].name}</Link>
          <Card.Text >
            <a>Atk:{itemList[key].atk} | Def:{itemList[key].def}</a>|
                        Hp:{itemList[key].hp} | Mp:{itemList[key].mp}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }))

})

export default ItemListRandom


