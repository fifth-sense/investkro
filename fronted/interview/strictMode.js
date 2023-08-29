/**
 * Strict mode in React is a development tool which helps React to identify  potential  problem in codebase in development phasee. this is not required in production
 * when we wrap our component in <React.StrictMode>  it performs additional checks and provide warning to ensure that your code follow best practices and 
 * avoid common pitfalls
 * 
 * WHY we use StrictMode
 * Warns us about unsafe Lifecycle methods, legacy string refs, lagecy Context API, detecting unexpected side effects 
 * 
 * Benefits
 * It ensures that we are following best practices while developing and provide *consistence codebase
 * helps us to detect the problem early
 * prevent unsafe practices
 * imporove performance- it warns us about inefficient and  unnecessary renders encourage app optimization
 * future compatibility: It helps us to adopt React's best practices and prepare our codebase for future versions of React, as deprecated 
 * features are often removed in newer releases.

Using Strict Mode is a proactive step to ensure your application's health and readiness for future React updates. However, remember to turn off Strict Mode
 when deploying your application to production, as it may introduce unnecessary overhead in terms of performance and development warnings in a live 
 environment.
 * 
 */

 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// use it in your root file
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);