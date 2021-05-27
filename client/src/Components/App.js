import React, { useState, useHook } from 'react'
import Login from './Login'
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    // **********************************************
    // **********************************************
    // **********************************************
    // this is how you empty or restart the game
    // sessionStorage.clear();  
    // **********************************************
    // **********************************************
    // **********************************************
    const [name, setName] = useState(' ')
    console.log(sessionStorage.getItem(name), 'name in apppppppp_js')

    const showComponent = () => {
        if (sessionStorage.getItem('name') === null) {
            // if session storage is null show login component
            return (<Login name={name} setName={setName} />)
        } else {
            // if session storage is not-null show Landing 
            return <Router name={name} />
        }
    }
    return (
        <div className="container">
            {showComponent()}
        </div>
    )
}
export default App