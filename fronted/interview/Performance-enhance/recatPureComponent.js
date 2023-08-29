/**
 * React PureComponent is built in class component in React which provide shouldComponentUpdate() automatically, it do shallow comparision with the 
 *  state  and props to determine it should updae or re-render or not? it helps us to prevent unnecessary re-render and optimize the performance of the app
 */

import React from "react"

export class Counter extends React.PureComponent{
    render(){
        console.log("calling Counter component")
        return(
            <div>
                <h6>Example Component</h6>
                <p>{this.props.count}</p>

            </div>
        )
    }
}

class CounterExample extends React.Component{
    state={
        count: 0
    }
    increseCounter = () =>{
        this.setState((prevState)=> ({
            count: prevState.count+1
        }))
    }

    render(){
        console.log("calling CounterExample component ")
        return(
            <div>
                <button onClick={this.increseCounter}>increase</button>
                <p>Count: {this.state.count}</p>
                <Counter count={7}/>

            </div>
        )
    }
}
export default CounterExample;
