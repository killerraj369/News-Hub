import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(inputValue);
  };

  const fetchData = (value) => {
    // Perform your API fetch here using the input value
    // You can use libraries like Axios or fetch API to make the request

    // Example using fetch API
    fetch(`https://api.example.com/data?search=${value}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data
        console.log(data);

        // Navigate to a different page after submitting the form
        history.push('/result'); // Replace '/result' with your desired URL or path
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
