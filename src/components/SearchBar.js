import React, { useState } from 'react';

// TODO: Take in and destructure the`fetchGifs` prop.
const SearchBar = (props) => {
  // TODO: Set a default `inputValue` state.
  const [inputValue, setInputValue] = useState('');

  // TODO: Create an`onChange` handler for your input value.
  const submitHandler = (e) => {
    e.preventDefault();
    props.fetchGifs(inputValue);
  };

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
  // TODO: Create an`onSubmit` handler for your search form.
  // TODO: Prevent the default action of a submit event
  // TODO: Dispatch the `fetchGifs` function

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeInput}
        value={inputValue}
        placeholder="search"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
  // TODO: Render a form with a controlled text input as its only child.
};

export default SearchBar;
