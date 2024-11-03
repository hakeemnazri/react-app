import React, { useState } from 'react';
 
function ThemeToggle() {
  // State to keep track of the theme; default is 'light'
  const [theme, setTheme] = useState('light');
 
  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  // Define styles for light and dark themes
  const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
  };
 
  const darkTheme = {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    height: '100vh'
  };
 
  return (
    <div style={theme === 'light' ? lightTheme : darkTheme}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
 
export default ThemeToggle;