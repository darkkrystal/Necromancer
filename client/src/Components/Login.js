import React, {useState} from 'react'
import {Container, Row , Col} from 'react-bootstrap'
import { EmojiAngryFill } from 'react-bootstrap-icons';
const Login = ({name,setName}) =>{
    const [input, setInput] = useState('name goes here')
    const [errMsg, setErrMsg] = useState('')

   
    const nameSubmit = (e)=>{
      // error handling for the login.
        e.preventDefault()
    
        if(input === ''){ return setErrMsg('Cmon, please enter your name below') }
        
        if(input === 'name goes here'){
            return setErrMsg('Thats not your name! Lazy prankster!')
        }
        console.log(input , "heyy")
        sessionStorage.setItem('name',input)
        setName(input)
    }
    let conditionalRendering =()=>{
      // showing error handling
        if (errMsg === ''){
            return null
        }else{
            return(
            <div className="badge bg-danger " style={{  fontSize:'22'}} >
            <EmojiAngryFill color="black" size={30} />
                {errMsg}
             
            </div>
            )
        }
    };
    


return(     
        // style={{backgroundColor:'black', color:'red', borderRadius:'15px',padding:'80px'}}
   <Container style={{backgroundColor:'black', color:'red', borderRadius:'15px',padding:'30px'}}>
        <Row>  
        <Col style={ {textAlign:'center'} }>
                As the last of your kind...
                </Col>
        </Row> 
        <Row> 
            <Col style={ {textAlign:'center'} }>
                Remind me your name... one last time...
                </Col>
        </Row> 
        {conditionalRendering()}
        <form className='ui form' onSubmit={(e)=>{ nameSubmit(e) }}>
        <input 
        type="text" 
        class="form-control" 
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-lg"
        onClick={(e)=>{
                if(e.target.value === 'name goes here')
                {setInput('')}
                else{return}                                   
            }
        }
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        type="text" 
        style={{backgroundColor:'pink'}} 
        />
        <div className="row-col-3" style={{textAlign:'center'}}>
        <div className="col"> </div>
        <button 
        
        onClick={(e)=>{nameSubmit(e)}}
        ype='submit' 
        className="btn btn-outline-info">
            Embark!
        </button>
        
        </div>
        </form>

        
        
</Container>
    )
}

export default Login
        
{/* <div className="two column centered row">
<div className="centered column">
    <div className="ui segment" style={{backgroundColor:"black"}}>
        <form className='ui form' onSubmit={(e)=>{ nameSubmit(e) }}>
            <div className="field">
                <div className="ui inverted pointing below red basic label">
                What's your name adventurer?
                </div>
                {conditionalRendering()}                               
                <input 
                onClick={
                    (e)=>{
                        if(e.target.value === 'name goes here')
                        {
                            setInput('')
                        }
                        else
                        {
                            return
                        }                                   
                    }
                }
                value= {input}
                onChange={(e)=>{setInput(e.target.value)}}
                type="text" 
                style={{backgroundColor:'pink'}} 
                />
            </div>
                       
            <div 
                onClick={(e)=>{nameSubmit(e)}}
                type='submit' 
                className="ui inverted bottom attached teal button"
            >
            Embark!
                        </div>
        </form>
    </div>
</div>
</div>
</div> */}