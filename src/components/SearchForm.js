import React from "react";


// Search form to collect searchterm for last or first name
function SearchForm(props) {
  return (
    <form className="m-4">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.onChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by first or last Name"
          id="search"
        />
        <br />
        <button onClick={props.onClick} className="btn btn-primary">
         Search/Return
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

