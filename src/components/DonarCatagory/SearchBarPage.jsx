import React, { useState, useEffect } from 'react';
import Card from './Card'; // Assuming Card component import

function MyComponent() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false); // New state to control when to show results

  useEffect(() => {
    fetch('Donar.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearchClick = () => {
    const filtered = data.filter((Donar) =>
      Donar.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setShowResults(true);
  };

  return (
    <div>
      <input
        className="p-2 border-solid"
        type="text"
        placeholder="Search Here..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="text-white bg-red-500 p-2 rounded-lg"
        onClick={handleSearchClick}
      >
        Search
      </button>

      {showResults && (
        <ul>
          {filteredData.map((Donar) => (
            <Card key={Donar.id} Donar={Donar} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
