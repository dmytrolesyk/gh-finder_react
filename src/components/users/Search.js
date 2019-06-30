import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = ({ target: { value } }) => setText(value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return alertContext.setAlert('Please enter something', 'light');
    }
    githubContext.searchUsers(text);
    setText('');
  }
  return (
    <>
      <form 
        className="form"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search Users"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && <button
        className="btn btn-light btn-block"
        onClick={githubContext.clearUsers}
      >
          Clear
      </button>}
    </>
  );
};


export default Search
