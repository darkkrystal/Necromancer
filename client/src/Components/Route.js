


const Route =({path, children})=>{
    return window.location.pathname === path ? children :null
    // pulls the child component specifically if the pathname matches, otherwise returns null
    // our original self made navigation device
    // takes in a path and wraps aroudn a component and if the path matches returns the component(s)
    // otherwise returns null ie nothing

    
}

export default Route