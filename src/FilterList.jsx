import React, { useState } from "react";
 
function FilterList() {
  // Sample data for demonstration
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango"];
  
  // State for managing the search input
  const [searchTerm, setSearchTerm] = useState("");
 
  // Filtered list based on the search term
  let filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div>
      <h1>Item Filter</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Displaying the filtered list */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default FilterList;