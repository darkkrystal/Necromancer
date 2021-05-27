import React, { useState, useEffect } from 'react'

import BeginAdvent from './BeginAdvent'
import Header from './Header'
import NecroStart from './NecroStart'
import ActionBlock from './ActionBlock'
import StoryStart from './StoryP1/StoryStart'
import { initStats } from '../actions'

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'



const Router = ({ name }) => {

  const dispatch = useDispatch()
  // const [stats, setStats] = useState(  {hp:0, atk:0, def:0, mp:0} )
  const [className, setClassName] = useState(null)
  const [spells, setSpells] = useState({ beginnerSpells: {} })

  const jobClass = useSelector(state => state.necro.className)

  console.log('the spells are ', spells)


  useEffect(() => {
    dispatch(initStats())

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">

          <Route path='/' exact component={ActionBlock} />
          <Route path='/' exact render={(props) => (
            <BeginAdvent setSpells={setSpells}
              spells={spells}
              className={className}
              setClassName={setClassName}
              name={name} />
          )} />
          <Route path='/necro' exact component={ActionBlock} />
          <Route path='/necro' exact component={NecroStart} />

          <Route path={`/${jobClass}/start`} exact component={ActionBlock} />
          <Route path={`/${jobClass}/start`} exact component={StoryStart} />
        </div>
      </BrowserRouter>
    </div>

  )
}


export default Router

// this is just a reference to the old way this was set up

{/* <Header
                setSpells={setSpells}
                spells={spells}
                className={className}
                setClassName={setClassName}
                name={name}
                setStats={setStats}
                stats={stats} />
                <Route path='/'>
                    <ActionBlock
                    setSpells={setSpells}
                    spells={spells} 
                    className={className}
                    setClassName={setClassName}
                    name={name}
                    setStats={setStats}
                    stats={stats}
                    />
                    <BeginAdvent
                    setSpells={setSpells}
                    spells={spells} 
                    className={className}
                    setClassName={setClassName}
                    name={name}
                    setStats={setStats}
                    stats={stats}
                    />             
                </Route>
                <Route path='/necro'>
                <ActionBlock/>
                <NecroStart/>
                </Route> */}