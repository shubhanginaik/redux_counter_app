import React from 'react';
import ReactDOM  from 'react-dom';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';

import * as actionTypes from './store/actions';
import Circle from './components/Circle';
import Button from './components/UI/Button';
import {
  incrementByOne,
  decrementByOne,
  incrementByFive,
  decrementByFive,
  reset
} from './store/actionsIndex';


function App() {
  const dispatch=useDispatch();
  const counter = useSelector((state)=> state.counter);
  return (
    <div className="App">
      <Circle payload/>
      <button 
      className="button"
      type={actionTypes.ADD_ONE}
      onClick={() => dispatch(incrementByOne())}
      //onClick={() => dispatch(incrementByOne())}
      >
        Add One
        </button>

        <button 
        className="button"
      type={actionTypes.ADD_ONE}
      onClick={() => dispatch(decrementByOne())}
      //onClick={() => dispatch(incrementByOne())}
      >
        Remove One
        </button>
        <button 
        className="button"
      type={actionTypes.ADD_ONE}
      onClick={() => dispatch(incrementByFive())}
      //onClick={() => dispatch(incrementByOne())}
      >
        Add Five
        </button>
        <button 
        className="button"
      type={actionTypes.ADD_ONE}
      onClick={() => dispatch(decrementByFive())}
      //onClick={() => dispatch(incrementByOne())}
      >
        Remove Five
        </button>
        <button 
        className="button"
      type={actionTypes.ADD_ONE}
      onClick={() => dispatch(reset())}
      //onClick={() => dispatch(incrementByOne())}
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
