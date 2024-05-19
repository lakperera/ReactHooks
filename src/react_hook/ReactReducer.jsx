import React from 'react'
import { useReducer } from 'react';

const reducer =(state ,action)=>{
    if (action.type === 'setImage') {
     return {...state,image:action.payload};
    }else if(action.type === 'setName'){
       return {...state,name:action.payload};
    }else if(action.type === 'setCity'){
     return {...state,city:action.payload};
   }else if(action.type === 'setPosition'){
     return {...state,position:action.payload};
   }else if(action.type === 'setDataArray'){
     return {...state,dataArray:[...state.dataArray,action.payload]};
   }
    else{
       return state;
    }
   }

const ReactReducer = (props) =>{
    const [state ,setState] =useReducer(reducer,{
        image:'',
        name:'',
        city:'',
        position:'',
        dataArray:[]
      });
      console.log(state);
      return (
        <div>
          <p>hello i am laskhitha {state.image}</p>
          <input type='text'value={state.image} placeholder='image' onChange={(e)=>setState({
            type:'setImage',
            payload:e.target.value
          })} ></input>
          <input type='text'value={state.name} placeholder='name'onChange={(e)=>setState({
            type:'setName',
            payload:e.target.value
          })} ></input>
          <input type='text'value={state.city} placeholder='city'onChange={(e)=>setState({
            type:'setCity',
            payload:e.target.value
          
          })}></input>
          <input type='text'value={state.position} onChange={(e)=>setState({
            type:'setPosition',
            payload:e.target.value
          })}></input>
          <button onClick={()=>setState({
            type:'setDataArray',
            payload:{
              image:state.image,
              name:state.name,
              city:state.city,
              position:state.position
            }
          })}>set data</button>
        </div>
      );
}
export default ReactReducer;
