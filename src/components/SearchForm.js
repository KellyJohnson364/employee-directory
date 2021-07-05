import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.onChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by State"
          id="search"
        />
        <br />
        <button onClick={props.onClick} className="btn btn-primary">
          {props.button}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

