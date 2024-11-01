import React, {useState} from 'react';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
 
  const handleChange = (event) => {
    setInputValue(event.target.value);  // Update state when user types
  };
  
 
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents page reload on form submit
    setSubmittedValue(inputValue);  // Save submitted input
    setInputValue('');  // Clear input field
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter :
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {submittedValue && <p>Submitted Text: {submittedValue}</p>}
      </div>
    </div>
  );
}
 
export default SimpleForm;