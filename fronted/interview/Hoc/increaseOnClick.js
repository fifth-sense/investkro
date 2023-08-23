import React, { useState } from 'react';
import HOC from './hoc';
const IncreaseOnClick = (props) => {
    const [fontSize, setFontSize] = useState(10);

    const {counter, incrementCounter } = props
    console.log("here", counter)
    return (
        <div>
            <p>Increase On Click component</p>
            <button onClick={()=> setFontSize((size)=>size+1)}>Click to increase font size</button>
            <p style={{fontSize}}> size of the font in onClick : {fontSize}</p>

            <p> value of name in {props.name}</p>
            <button onClick={() => incrementCounter()}>click </button>
            <p>value of counter {counter}</p>
        </div>
    )


}
export default HOC(IncreaseOnClick, 2);