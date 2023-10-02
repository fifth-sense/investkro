import React, {useState, useEffect, useMemo, memo, useCallback} from 'react'

import Counter from './pages/counter';
import User from './pages/users';
import Example from '../fronted/interview/example';
import UseMemoExample from './interview/memoHook';
// import Parent from './interview/Performance-enhance/usingUseCallback-Memo';
import EventExample from './interview/Synthetic events';
import CounterExample from './interview/Performance-enhance/reactPureComponent';
import MyComponent from './interview/errorBoundary';
import Parent from './interview/prop-drilling';
import ParentComponent from './interview/child-to-parent-data-pass';
import axios from 'axios';

// make an API call post images and general data 
//
const App = () => {
    let url = "https://fetchdata";
    let image = "https://imageurl";

    useEffect(()=>{
       try{
        const res = axios.post(url,  {
            image: image,
            name: "avatar", 
            type: "png", 

        }, {"content-type": "multipart/form-data"} ).then(res=> console.log(res))

       }catch(e){
        console.log(e)
       }
      


    }, []);


    //how to get the length ogf an object
    let obj = {
        a: 1
    }


    return (
        <>
        <h1>hello</h1>
        {/* <MyComponent/> */}
        {/* <UseMemoExample/> */}
        {/* <Parent/> */}
        <ParentComponent/>
        </>
     )
}
export default App;


