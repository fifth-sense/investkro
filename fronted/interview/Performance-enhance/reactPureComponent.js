/**
 * React PureComponent is built in class component in React which provide shouldComponentUpdate() automatically, it do shallow comparision with the 
 *  state  and props to determine it should updae or re-render or not? it helps us to prevent unnecessary re-render and optimize the performance of the 
 * app
Avoids Unnecessary Renders: Pure Components prevent re-renders when props or state remain unchanged. This is particularly useful when dealing with complex components that might have deep nested structures.

Lists and Tables: In scenarios where you're rendering lists or tables of items, Pure Components can be beneficial. They ensure that only the individual items that have changed are re-rendered instead of the entire list/table.

Performance-Critical Applications: Applications that require a high level of performance, such as data visualization or real-time updates, can benefit from Pure Components. They help in reducing the rendering overhead and improving the responsiveness of the UI.

Complex UI Components: When dealing with UI components that have a lot of nested child components, Pure Components can significantly reduce unnecessary re-renders, improving overall application performance.

Avoiding Memoization: While React's memo higher-order component achieves similar performance improvements, Pure Components offer a simple way to achieve automatic memoization without manually wrapping components.

Remember that the benefits of Pure Components come from the automatic shallow comparison. However, if your component's props or state involve complex objects, using memo or implementing custom shouldComponentUpdate might be more suitable to fine-tune your optimization strategy.

Q. Can we use purecomponent in functional component?
A. No, you cannot directly use the PureComponent class in functional components. The PureComponent is a class component that provides an optimization by
   automatically implementing the shouldComponentUpdate method with a shallow prop and state comparison. This is something that can't be directly 
   replicated in functional components.
   However, React provides an equivalent optimization for functional components using the React.memo higher-order component. React.memo performs a 
   shallow prop comparison and prevents the re-render of a functional component if its props haven't changed.

Here's an example of how to use React.memo with a functional component:

import React from 'react';

const Counter = React.memo(({ count }) => {
  console.log('Counter component rendered');
  return <div>Count: {count}</div>;
});

const App = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log('App component rendered');
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <Counter count={count} />
    </div>
  );
};

export default App;
In this example, the Counter functional component is wrapped with React.memo. This ensures that the Counter component will only re-render if its count 
prop changes, just like a PureComponent would do for class components.
So, while you can't use PureComponent directly in functional components, you can achieve a similar optimization using React.memo when working with 
functional components.






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
