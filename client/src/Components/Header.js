import React, { useState, useEffect } from 'react'
import { ItemsStatInfluence } from '../actions/stats/index'

import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const stats = useSelector(state => state.stats)
  const [activeIndex, setActiveIndex] = useState(null)
  const items = useSelector(state => state.items)

  const dispatch = useDispatch()

  useEffect(() => {
    if (items[0]) {
      console.log('we goin in here')
      dispatch(ItemsStatInfluence(items, stats))
    }
    else return
  }, [items])

  const renderItems = () => {
    return (<Navbar.Brand style={{ color: "black" }}>{ items[0] ? items[0].name : '' }</Navbar.Brand>
    )
  }
  const MouseOverMenu = (index) => {
    // changes the current index the mouse is over to the active item in the header
    setActiveIndex(index)
  }
  // Iterating through an object {stats} to display in header  
  const statsBeingRendered = Object.keys(stats).map(
    (key, index) => {
      const active = activeIndex === index ? 'active' : ''
      return (
        <Navbar.Brand
          style={{ color: 'red', size: '40px' }}
          onMouseEnter={() => { MouseOverMenu(index) }}
          onMouseLeave={() => { setActiveIndex(false) }}
          className={`${active} item`}>
          {key}:{stats[key]}
        </Navbar.Brand>
      )
      // this returns 4times
    })
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={{ borderRadius:"10px", color:"blue"}}>
      <Navbar.Brand  > {sessionStorage.getItem('name')} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          {statsBeingRendered}
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Items" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">{renderItems()}</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  )
}
export default Header


