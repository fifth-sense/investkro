import React, { useCallback, useState } from "react";

export const Parent = () => {
  const [counter, setCounter] = useState(0);
  console.log("Parent Component");
  const incrementCounter = useCallback(() => {
    if(counter ==10) return
    setCounter((counter) => counter + 1);
  }, []);
  return (
    <div>
      <p>Parent Component</p>
      <button onClick={incrementCounter}>Click me</button>
      <p>{counter}</p>
{/* 
      {[...Array(10)].map((_, index) => ( */}
        <Child  name="Hello Child!"  />
      {/* ))} */}
    </div>
  );
};
//wrapping child component in memo stop the unnecessary rerendering of child compoenent,
// what if we want child component to be rendered only 10 times on the initial 10 counter of parent counter props
export const Child = React.memo((props) => {
  console.log("child Component");
  return (
    <>
      <p>{props.name}</p>
     
    </>
  );
});
export default Parent;
