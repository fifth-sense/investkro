// import React, {useState, useEffect, useMemo, memo, useCallback} from 'react'

// import Counter from './pages/counter';
// import User from './pages/users';
// import Example from '../fronted/interview/example';
// import UseMemoExample from './interview/memoHook';
// // import Parent from './interview/Performance-enhance/usingUseCallback-Memo';
// import EventExample from './interview/Synthetic events';
// import CounterExample from './interview/Performance-enhance/reactPureComponent';
// import MyComponent from './interview/errorBoundary';
// import Parent from './interview/prop-drilling';
// import ParentComponent from './interview/child-to-parent-data-pass';
// import axios from 'axios';

// make an API call post images and general data
//
// const App = () => {

//     return (
//         <>

//         </>
//      )
// }
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export const CustomeModal = ({ isOpen, data, id }) => {
  const lastName = data[id].lastName;
  return (
    <Modal show={isOpen}>
      <Modal.Body>{lastName}</Modal.Body>
    </Modal>
  );
};
function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currItemIndex, setCuurItemIndex] = useState(-1);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=4")
      .then((res) => res.json())
      .then((res) => setData(res["users"]));
    console.log(data);
  }, []);
  const handleClick = (index) => {
    setShowModal(true);
    setCuurItemIndex(index);
  };

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div>
            <div key={data.id} onClick={() => handleClick(index)}>
              {item.id}: {item.firstName}
            </div>
          </div>
        );
      })}
      
      {showModal && (
        <CustomeModal isOpen={showModal} data={data} id={currItemIndex} />
      )}
    </div>
  );
}

export default App;
