import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  //fetch the api

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=4")
      .then((res) => res.json())
      .then((res) => setData(res["users"]));
  }, []);
  const handleRowClick = (index) => {
    let arr = [...data];
    let row = arr[index];
    let newRow = {
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName
    };
    console.log(newRow);
    setData([...data, newRow]);
  };

  return (
    <div className="App">
      <table style={{ border: "1px solid red" }}>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
        </tr>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id} onClick={() => handleRowClick(index)}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
