import React, { useState, useEffect } from "react";

// Sample array of objects
const data = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "David", age: 40 }
  // ... more objects
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Debounce function to delay the search
  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments), delay;
      });
    };
  };
  const handleSearch = () => {
    const filter = data.filter((item) => {
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filter);
  };

  // Debounced version of the search function
  const debouncedSearch = debounce(handleSearch, 1000);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            {result.name} (Age: {result.age})
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
