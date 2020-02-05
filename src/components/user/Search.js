import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { clearUsers, searchUsers, users } = githubContext;
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />

        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block text-center"
        />
        {users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
