/**
 * ErrorBoundary are Higher Order Component that is use to catch and handle errors during rendering. in lifecycle methods
 * ErrorBoundary help entire application from crashing and provide a better user experience in any error occur in any specific component
 * It allows us to display a fallback ui when we encounter a error for better uI UX
 * 
 * they provide a way of isolating error and ensure that rest of the application function continue normally. they are useful for large scale application
 * to maintain the application in case of errors
 */


import { useEffect, useState } from "react"

const ErrorBoundary = ({children} ) => {
    const [hasError, setHasError] = useState(false);
    useEffect(()=>{
        //this handle method get called whenever there is an error in children
        const handleError = (error) =>{
            console.log("Error caught by ErrorBoundary", error)
            setHasError(true);
        }
        window.addEventListener('error', handleError);
        //we are unmounting or cleaniup the event listner here
        return() =>{window.removeEventListener('error', handleError)}
    }, [])
    if(hasError){
        return <div>Something went wrong! please try after sometime</div>
    }
    return children;

}

const MyComponent = () => {
    const throwError = () => {
        throw new Error("An error occurred!")
    }
    return(
        <ErrorBoundary>
            <div>My Component</div>
            <button onClick={throwError}>Trigger error</button>
        </ErrorBoundary>
    )
}

export default MyComponent;