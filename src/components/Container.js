import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { EmployeeTable, EmployeeList, TableHeader } from "./EmployeeTable";
import API from "../utils/API";

function ResultContainer () {

  // set state 
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [direction, setDirection] = useState("⬇️");
  // Load employees when page loads
  useEffect(() => {
      loadEmployees()
  }, [])

  // when search input is changed
  function handleInputChange(event) {
    event.preventDefault();
    setSearch(event.target.value)
  //  console.log(event.target.value)
  } 
  

  // when search/return button is clicked
 function handleFormSubmit(event) {
    event.preventDefault();
  setResults(filterItems(employees, search)) 
  setSearch("") 
 }
   
  //find employees that include search term
  function filterItems(employees, search) {
    return employees.filter(function(employee) {
        return employee.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1 || employee.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

  // fetch employees using axios route in API Utility
  async  function loadEmployees() {
    await API.getEmployees()
    .then(res => {
      setEmployees(res.data.results)
      setResults(res.data.results)
         
      })
      .catch(err => console.log(err));
  };

  // sort results in ascending or descending order and set Results to render
  function handleSort(event) {
    event.preventDefault();
    let unsorted = results
    setResults(sortEmployees(unsorted))
  
  }

  // function to perform sort depending on state
  function sortEmployees (unsorted) {
    if (direction == "⬇️") {
      setDirection("⬆️")
    return unsorted.sort((a, b) => (a.name.last > b.name.last) ? 1 :
     (a.name.last === b.name.last) ? ((a.name.first > b.name.first) ? 1 
     : -1) : -1 )
    } else {
      setDirection("⬇️")
      return unsorted.reverse()
    }

  }


    return (
    
      <div className="bg-dark text-white">
        <h2 className="text-center p-5">Employee Directory</h2>
        <SearchForm 
        value = {search}
        onChange={handleInputChange}
        onClick={handleFormSubmit}
       
       /> 
        {results.length ? (
          <EmployeeTable>
            <TableHeader
            direction={direction}
            sortLast= {handleSort}/>
            {results.map(employee => (
              <EmployeeList key={employee.id.value}
              picture = {employee.picture.medium}
              first = {employee.name.first}
              last = {employee.name.last}
              phone = {employee.phone}
              number = {employee.location.street.number}
              street = {employee.location.street.name}
              city = {employee.location.city}
              state = {employee.location.state}
              zip = {employee.location.postcode}
              />
            ))}   
          </EmployeeTable>   
        ) : (
          <h3> No Result to Display</h3>
        )}
      </div>    
    );
}


export default ResultContainer;
