// src/App.js
import React, { useState, useEffect } from 'react';


// src/components/UserList.js

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
};



function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch initial user data
    fetchUsers();
  }, [page]);

  const fetchUsers = () => {
    fetch(`https://api.github.com/users?since=${page * 5}&per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, ...data]);
      })
      .catch((error) => console.error(error));
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList users={users} />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
