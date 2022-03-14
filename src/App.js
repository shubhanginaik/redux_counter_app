import React from 'react';
import {useDispatch } from 'react-redux';
import './App.css';

import * as actionTypes from './store/actions';
import Circle from './components/Circle';
// import Button from './components/UI/Button';



function App() {
  const dispatch=useDispatch();
  return (
    <div className="App">
      <Circle payload/>
      <button 
      className="button"
      type="button"
      onClick={() => dispatch({type:actionTypes.ADD_ONE})}
      >
        Add One
        </button>

        <button 
      className="button"
      type={actionTypes.REMOVE_ONE}
      onClick={() => dispatch({type:actionTypes.REMOVE_ONE})}
      >
        Remove One
        </button>
        <button 
      className="button"
      type={actionTypes.ADD_FIVE}
      onClick={() => dispatch({type:actionTypes.ADD_FIVE,payload:5})}
      >
        Add Five
        </button>
        <button 
        className="button"
      type={actionTypes.REMOVE_FIVE}
      onClick={() => dispatch({type:actionTypes.REMOVE_FIVE})}
      >
        Remove Five
        </button>
        <button 
        className="button"
      type={actionTypes.RESET}
      onClick={() => dispatch({type:actionTypes.RESET})}
      >
        Reset
        </button>

      {/* <Button 
      onClick={()=>dispatch({type:actionTypes.REMOVE_ONE})}
      >
        Remove One
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.RESET,payload: 0})}
      >
        Reset
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.ADD_FIVE})}>
        ADD_FIVE
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.REMOVE_FIVE})}>
        Remove Five
        </Button> */}

    </div>
  );
}

export default App;
