import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultTable from "./ResultTable";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.allEmployees();
  }

  allEmployees = () => {
    API.getAllEmployees()
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };
  searchEmployees = query => {
    API.filterEmployees(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultTable results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
