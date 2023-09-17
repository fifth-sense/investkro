import React, { useState } from "react";

const ParentComponent = () => {
  const [name, setName] = useState("Ranbeer");
  const handleclick = (childData) => {
    setName(childData);
  };

  return (
    <>
      <ChildComponent parentCallback={handleclick} />
      <p>Name is {name}</p>
    </>
  );
};

const ChildComponent = (props) => {

    const handleSubmit = (e) =>{
        console.log("here---", e)
        props.parentCallback(e.target.myName.value);
        e.preventDefault();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name " name="myName" />
        <input type="submit" value={"Submit"} />
      </form>
    </>
  );
};
export default ParentComponent;
