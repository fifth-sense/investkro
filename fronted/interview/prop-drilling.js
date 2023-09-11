import React,{ useState, useContext } from "react";

//Without useContext

// const Parent = () => {
//   const [fname, setFname] = useState("Ruby");
//   const [lnmae, setFnmae] = useState("Kumari");

//   return (
//     <>
//       <h6>Parent Component</h6>
//       <ChildA fname={fname} lnmae={lnmae} />
//     </>
//   );
// };
// const ChildA = ({fname, lnmae}) => {

//   return (
//     <>
//       <h6>ChildA Component</h6>
//       <ChildB fname={fname} lnmae={lnmae} />
//     </>
//   );
// };
// const ChildB = ({fname, lnmae}) => {

//   return (
//     <>
//       <h6>ChildB Component</h6>
//       <ChildC fname={fname} lnmae={lnmae} />
//     </>
//   );
// };
// const ChildC = ({fname, lnmae}) => {

//   return (
//     <>
//       <h6>ChildC Component</h6>
//       <p> Data from parent Component</p>
//       <p>{fname}</p>
//       <p>{lnmae}</p>
//     </>
//   );
// };

//With useContext

let context = React.createContext(null)

const Parent = () => {

    const [fname, setFname] = useState("Ruby");
    const [lnmae, setFnmae] = useState("Kumari");
  
    return (
      <>
      <context.Provider value={{fname, lnmae}}>
        <h6>Parent Component</h6>
        <ChildA/>
        </context.Provider>
      </>
    );
  };
  const ChildA = () => {
    return (
      <>
        <h6>ChildA Component</h6>
        <ChildB  />
      </>
    );
  };
  const ChildB = () => {
    return (
      <>
        <h6>ChildB Component</h6>
        <ChildC  />
      </>
    );
  };
  const ChildC = () => {
    const {fname, lnmae } = useContext(context)
    return (
      <>
        <h6>ChildC Component</h6>
        <p> Data from parent Component</p>
        <p>{fname}</p>
        <p>{lnmae}</p>
      </>
    );
  };

export default Parent;
