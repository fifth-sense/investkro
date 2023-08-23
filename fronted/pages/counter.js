import React from 'react';
import { increment, decrement } from '../redux/action';
import { connect } from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../redux/actionTypes';

const Counter = ({counter, incrementCounter, decrementCounter}) => {
    return(
        <div>
            <span>Counter : {counter}</span>
            <button onClick={incrementCounter()}>+</button>
            <button onClick={decrementCounter()}>-</button>
        </div>
    )
}

const mapStateToProps = ({counter}) => ({
    counter
})
const mapDispatchToProps = dispatch=>{
     dispatch(INCREMENT_COUNTER),
    dispatch(DECREMENT_COUNTER)
};

export const CounterCom = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterCom;
