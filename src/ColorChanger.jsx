import React, { useState } from 'react';
 
function ColorChanger() {
  // Initialize state to hold the current color
  const [bgColor, setBgColor] = useState('#ffffff');
 
  // Function to generate a random color in hex format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
 
  // Function to handle the color change on button click
  const handleChangeColor = () => {
    setBgColor(getRandomColor());
  };
 
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '50px',
        textAlign: 'center',
        borderRadius: '8px',
      }}
    >
      <p>Click the button to change the background color!</p>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}
 
export default ColorChanger;