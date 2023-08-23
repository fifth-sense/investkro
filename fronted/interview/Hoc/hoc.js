import React, {useState} from "react";

const HOC = (OriginalCompoent, increaseCount) => {
  
   function NewComponent(props){
    const [counter, setCounter] = useState(10)
    return<>
    <div> HOC component</div>
      <OriginalCompoent
         name="Hoc component"
         counter={counter}
         incrementCounter={() => setCounter((size) => size + increaseCount)}
         {...props}/>
    </>
   
   }
   return NewComponent;

}

export default HOC;