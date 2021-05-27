import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


import itemContainer from './Items'
import ItemListRandom from './ItemListRandom'

import { necroSelectedStart } from '../actions/Necro/index'
import { setFirstStats } from '../actions/stats/index'
import { Card } from 'react-bootstrap'

const NecroStart = (name, stats, setStats, className, setClassName, setSpells, spells) => {
  const [toggle, setToggle] = useState(false)
  // const itemsInState = useSelector(state => state.items)



  console.log(itemContainer[0], 'STUFFF NECROSTART')

  const dispatch = useDispatch()
  const ALLSTATE = useSelector(state => state);

  console.log(ALLSTATE, 'hihihihihihihihihihihihihihihihihihihihi')
  useEffect(() => {
    dispatch(necroSelectedStart())
    dispatch(setFirstStats('Necromancer'))
  }, [])

  const renderNecroTextTimer = () => {
    setTimeout(() => {
      setToggle(true)
      console.log('time has passed')
    }, 1500);
  };

  const rendernecroText = () => {
    if (toggle === false) {
      return null
    }
    else return (
      <div >
        We dont have much time to spare!!
      </div>
    )
  }
  return (
    // style={{backgroundColor:'lightGrey', color:'red', borderRadius:'15px'}}
    <Card>
      <Card.Header>
        Quick Necromancer! Grab some gear before we leave.
    {renderNecroTextTimer()}{rendernecroText()}
      </Card.Header>
      <Card.Body>
        <ItemListRandom />

      </Card.Body>
    </Card>

  )
}
export default NecroStart;

// repo-repository => master
// clone
// master/main