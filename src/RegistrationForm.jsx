import React, { useState } from 'react';
 
function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
    const newErrors = {};
 
    // Validate Username
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    }
 
    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
newErrors.email = 'Email must be valid';
    }
 
    // Validate Password
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
 
    setErrors(newErrors);
 
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      // If form is valid, submit the form
      console.log('Form submitted', { username, email, password });
      alert('Form submitted successfully');
      
      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
 
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color : 'red' }} >{errors.email}</p>}
      </div>
 
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
 
      <button type="submit">Register</button>
    </form>
  )
}
 
export default RegistrationForm;