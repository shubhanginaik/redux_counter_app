import React from 'react';
import classes from './Circle.module.css';
import ids from './Circle.module.css';

import {useSelector} from 'react-redux';
    const Circle=()=>{
        const counter= useSelector((state)=>state.counter);
        
        if(counter===0){
            return <div className={classes.circle}>{counter}</div>
        }
        else if(counter%2!==0){
            return <div className={classes.circle} id={ids.odd}>{counter}</div>
        }
        else{
            return <div className={classes.circle} id={ids.even}>{counter}</div>
        }
    }
    export default Circle;