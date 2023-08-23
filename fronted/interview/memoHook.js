// useMemo hook return a memoized value
//The useMemo Hook only runs when one of its dependencies update.
//This can improve performance.

import React,{ useState} from "react";

const ExpensiveCalculation = (num)=>{
    console.log("calculating...")
    for(let i =0;i<100000000000;i++){
        num+=1;
    }
   return num;
}

const UseMemoExample = () => {

    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);
    const calculation = ExpensiveCalculation(counter)

    const addTodo = () => {
        setTodos((t=> [...t, "New Todo" ]));
    }
    const increment = () => {
        setCounter(counter+1);

    }
    return(
        <div style={{backgroundColor: 'tomoto'}}>
            <div>
                {todos?.map((todo, index)=><li key={index}>{todo}</li>)}
                <button onClick={()=>addTodo}>Add Todo</button>
            </div>
            <hr/>
            <p>Count: {counter}</p>
            <button onClick={increment}>increment counter</button>
            <hr/>
            <h3>expensive calculation</h3>
            {calculation}
        </div>
    )

}
export default UseMemoExample;