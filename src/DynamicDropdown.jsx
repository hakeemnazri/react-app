import React, { useState } from 'react';
 
const DynamicDropdown = () => {
  // Define the data for countries and cities
  const countryData = {
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
    Japan: ["Tokyo", "Kyoto", "Osaka"],
  };
 
  // State for the selected country and city
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
 
  // Handle changes in country selection
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCity(""); // Reset city when country changes
  };
 
  // Handle changes in city selection
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
 
  return (
    <div>
      <h2>Select Country and City</h2>
 
      {/* Country Dropdown */}
      <label>
        Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {Object.keys(countryData).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
 
      {/* City Dropdown */}
      <label>
        City:
        <select value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
          <option value="">Select a city</option>
          {selectedCountry &&
            countryData[selectedCountry].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </label>
 
      {/* Display the selection */}
      {selectedCountry && selectedCity && (
        <p>
          You selected: {selectedCountry} - {selectedCity}
        </p>
      )}
    </div>
  );
};
 
export default DynamicDropdown;