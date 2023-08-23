import React, { useState } from 'react';
import HOC from './hoc';
const IncreaseOnHover = () => {
    const [fontSize, setFontSize] = useState(10);
  
    return (
        <div>
             <p>Increase On Over component</p>
            <button onMouseOver={()=> setFontSize((size)=>size+1)}>Click to increase font size</button>
            <p style={{fontSize}}> size of the font in onMouse over  : {fontSize}</p>
        </div>
    )


}
export default HOC(IncreaseOnHover);