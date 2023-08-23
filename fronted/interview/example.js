import React, { useState } from 'react';
import IncreaseOnClick from './Hoc/increaseOnClick';
import IncreaseOnHover from './Hoc/increaseOnHover';

const Example = () => {
    const [name,setName] = useState("");
    const [waitList, setWaitList] = useState([]);

    handleSubmit = (e) => {
        e.preventDefault();
        setWaitList([...waitList, name]);
        setName("")
    }


    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label id="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <button type="submit">Add to waitlist</button>
            <ol>
                {waitList?.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
            </form>

            <IncreaseOnClick/>
            <IncreaseOnHover/>
        </div>
    )
}
export default Example;