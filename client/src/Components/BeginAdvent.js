import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AddToSetGameState } from '../actions/GameState/index';



// this set after the log in screen the 2nd page
// used to initiate the gamestate stats and char state after clicking the class
const BeginAdvent = ({ name, className, spells }) => {
  const playerName = sessionStorage.getItem("name")
  const currentGameState = useSelector(state => state.gameState)
  const dispatch = useDispatch()
  let clickedButtton = false
 

  const necromancerClassClicked = () => {
    dispatch(AddToSetGameState(currentGameState))
    navigatorflip()
    clickedButtton = true;
  }
  
  // timer for the window to change to /necro
  const navigatorflip = () => {

    setTimeout(() => {
      window.location.pathname = '/necro'
    }, 5000);
  }
  const renderToggle = () => {
    if (clickedButtton === false) {
      return (
        <div className="card">
          <div className="card-header text-center">
            Darkness creeps in and your adventure begins {playerName}...
                  </div>
          <div className="card-body">
            <div className="row"
              style={{ backgroundColor: 'white', color: 'red', borderRadius: '25px', padding: '10px' }}
            >
              <div className="row">
                <div className="col text-center">
                  <div className="ui inverted centered segment">
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <button className="btn btn-outline-danger" style={{ color: 'purple' }}>
                    <div
                      onClick={() => { necromancerClassClicked(console.log('pressed')) }}
                      className="ui fluid inverted purple button">
                      Necromancer
                    </div>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  The Last of your kind!
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else return (
      <div className="ui four column stackable centered grid"
        style={{ backgroundColor: 'lightGrey', color: 'red', borderRadius: '15px' }}>
        <div className="row">
          {spells.beginnerSpells.DeathShreik.damage}
        </div>
        <div className="row">
          <div className="ui inverted segment">
            You have chosen well traveler, you are a {className} I hear.
                  <br></br>
                  READ QUICKLY AS YOU ONLY HAVE SECONDS TO OBSERVE BEFORE WE MUST MOVE.
                  <p></p>
            <h2>You have learned:</h2>
            <p></p>
          </div>
        </div>
        <div className="row"></div>
      </div>)
  }
  // is what is being render through a toggle at the top
  return (<div style={{ paddingTop: '20px' }}>
    {renderToggle()}
  </div>)
}

export default BeginAdvent