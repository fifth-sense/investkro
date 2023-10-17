`useMemo` and `useCallback` are two hooks provided by React to optimize performance in functional components by memoizing the results of calculations and function references. 
They serve different purposes, and it's important to understand when to use each one.

**`useMemo`**:

- `useMemo` is used to memoize the result of a computation and cache it to prevent unnecessary recalculations. It takes two arguments: a function and an array of dependencies. 
The function is executed, and its result is cached until one of the dependencies changes.

**Example of `useMemo`**:

import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent({ value }) {
  const expensiveResult = useMemo(() => {
    // This is a computationally expensive operation
    return value * 2;
  }, [value]);

  return <div>Result: {expensiveResult}</div>;
}


In this example, `useMemo` ensures that the expensive calculation is performed only when the `value` prop changes. If `value` remains the same, the cached result is returned, avoiding unnecessary recalculations.

**`useCallback`**:

- `useCallback` is used to memoize functions. It takes two arguments: a function and an array of dependencies. 
The function is cached and returned. The purpose is to avoid creating a new function on every render, 
which can be helpful when passing callbacks to child components.

**Example of `useCallback`**:


import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={increment} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}


In this example, `useCallback` ensures that the `increment` function doesn't change between renders as long as `count` remains the same. 
This can prevent unnecessary re-renders in child components that depend on this function.

**When to Use `useMemo`**:

Use `useMemo` when you want to memoize the result of a computation and prevent unnecessary calculations. It's helpful for optimizing the rendering of complex computations, such as filtering, mapping, or heavy calculations.

**When to Use `useCallback`**:

Use `useCallback` when you want to memoize a function, especially when passing functions as props to child components. It can help optimize performance and prevent unnecessary renders in child components.

In summary, `useMemo` is for memoizing the result of computations, while `useCallback` is for memoizing functions. Both hooks are useful for optimizing performance in React applications by preventing unnecessary calculations and re-renders.