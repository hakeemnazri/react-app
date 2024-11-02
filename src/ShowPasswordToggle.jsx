import React, { useState } from 'react';
 
function ShowPasswordToggle() {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
 
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
 
  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
        />
      </label>
      <div>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={togglePasswordVisibility}
        />
        <label>Show Password</label>
      </div>
    </div>
  );
}
 
export default ShowPasswordToggle;