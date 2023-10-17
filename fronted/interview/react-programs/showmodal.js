

//Q.  fetch the list of users from given url and show it in list and on click of every item show the last name of crossponding element
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
