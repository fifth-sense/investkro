import React, { useRef, useState } from "react";
import '../index.css'

const UserList = () => {
  const [nameList, setNameList] = useState([]);
  let fnameRef = useRef("");
  let lnameRef = useRef("");
  let [editIndex, setEditIndex] = useState(-1) 

  const handleAdd = () => {
    let newfName = fnameRef.current.value;
    let newLName = lnameRef.current.value;
    if(newfName && newLName){
        if(editIndex == -1) {// add new elemet
            setNameList([...nameList, {fname: newfName, lname: newLName}]);
        }else{
            //edit existing item in the list
            let updatedList = [...nameList];
            updatedList[editIndex] = {fname: newfName, lname: newLName};
            setNameList(updatedList);
            setEditIndex(-1); //reset edit 
        }
    }
    fnameRef.current.value='';
    lnameRef.current.value='';
  };
  const handleDelete = (index) => {
    let updatedList = [...nameList];
    updatedList.splice(index, 1);
    setNameList(updatedList);
    fnameRef.current.value='';
    lnameRef.current.value='';
    
  };
  const handleEdit = (index) => {
    let nameToEdit = nameList[index];
    fnameRef.current.value = nameToEdit.fname;
    lnameRef.current.value = nameToEdit.lname;
    setEditIndex(index);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter First Name"
          ref = {fnameRef}
          className='input-style'
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          ref={lnameRef}
          className='input-style'
        />
        <button onClick={() => handleAdd()}>Add</button>
        {nameList &&
          nameList.map((item, index) => {
            return (
              <ul>
                <li key={index} className="read-the-docs">
                  {item.fname}   {item.lname} 
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
               
              </ul>
            );
          })}
      </div>
    </div>
  );
};
export default UserList;
