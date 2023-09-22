import React ,{ useReducer} from 'react'
import'./style.css'



const reducer=(state, action)=>{
if(action.type==="Increment"){
    state = state + 1 ;
}
if(state>0 && action.type==="Decrement"){
    state = state - 1;
} return state;

};


const UseReducer = () => {
const initaialData=5;
    // const[newdata, setNewdata]=useState(0)          
    const[state, dispatch]=useReducer(reducer, initaialData)          




  return (
    <>
    <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center my-custom-margin">
      <div className="text-center wrapper">
        {state}
        
      </div>
    
      <div className="d-flex">
   
        <button className='glow-on-hover mx-5' onClick={()=> dispatch({type:"Increment"})} >Increment</button> <span>  </span> <span> </span> 
        <span> </span><button  className='glow-on-hover mx-5' onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>
      </div>
    </div>
  </>
  
  )
}

export default UseReducer