
import React, {useState} from 'react'

//pass data from parent to child (using props)

const ChildComp = (props) => {
    return(
        <div>
            <p>{props.counterVal}</p>

        </div>
    )
}
const ParentComp = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(++counter)
    }
    return(
        <div>
            <button onClick={increment}>Increment Counter</button>
            <Child counterVal = {counter}/>
        </div>
    )



}

//passing from child to parent (using callbacks)
// 1. Create a callback in the parent component which takes in the data needed as a parameter.
// 2. Pass this callback as a prop to the child component.
// 3. Send data from the child component using the callback.

const Child = (props) =>{
    let val = props.counterVal;
    
    return(
        <div>
            <button onClick={() => props.callBack(++val)}>increment</button>

        </div>
    )

}

const Parent = () => {
    const [counter, setCounter] = useState(0);
    let callBack = valueFromChild => setCounter(valueFromChild);
    return (
        <div>
            <p>Counter in parent :  {counter}</p>
            <Child callBack = {callBack} counterVal = {counter}/>
        </div>
    )

}