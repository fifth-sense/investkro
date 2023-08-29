/**
 * Synthetic evenets are React way of handling dom events consistentely across the browsers and platforms
 * React Event system wraps native browsers event with a cross browser compatible interface and provide a unified way of handling events in react
 * synthetic events in React offer a performance-oriented and consistent way to handle events while abstracting away browser differences, resulting in a 
 * smoother and more predictable development experience.
 * 
 * benefits of sythentic events
 Performance: React uses a single event listener at the root of the document (event delegation), which means fewer event listeners are attached to 
        individual elements. This optimizes performance by reducing memory usage and improving event handling efficiency.

Cross-Browser Compatibility: Synthetic events abstract away browser-specific event handling differences, ensuring consistent behavior across various 
        browsers. Developers don't need to worry about writing browser-specific code for event handling.

Event Pooling: React uses an event pooling mechanism where event objects are reused to reduce memory consumption. This minimizes the overhead of 
        creating and garbage collecting numerous event objects during high-frequency events.

Normalized Properties: Synthetic events provide normalized properties across different browsers. This ensures that you have a consistent set of 
        properties and methods available regardless of the browser being used.

Automatic Cleanup: React automatically handles event listeners' cleanup and unbinding when a component is unmounted. This prevents memory leaks and 
       ensures proper resource management.

Ease of Use: Developers can work with event handling in React using familiar HTML event attributes (e.g., onClick, onChange) instead of dealing with
 various browser-specific event registration methods.
 *  
 */

import React from "react";

const EventExample = () =>{
    const handleClick =(e)=>{
        e.preventDefault(); // can use e.stopPropogation
        console.log(e)
    }
    return(
        <button onClick={handleClick}>click me</button>

    )
}
export default EventExample