import React from 'react';
import ReactDOM  from 'react-dom';
import { useDispatch } from 'react-redux';
import './App.css';

import * as actionTypes from './store/actions';
import Circle from './components/Circle';
import Button from './components/UI/Button';

function App() {
  const dispatch=useDispatch();
  return (
    <div className="App">
      <Circle />
      <Button 
      onClick={()=>dispatch({type:actionTypes.ADD_ONE})}>
        Add One
        </Button>
      <Button 
      onClick={()=>dispatch({type:actionTypes.REMOVE_ONE})}>
        Remove One
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.RESET,payload: 0})}>
        Reset
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.ADD_FIVE})}>
        Add Five
        </Button>
        <Button 
      onClick={()=>dispatch({type:actionTypes.REMOVE_FIVE})}>
        Remove Five
        </Button>
    </div>
  );
}

export default App;
