import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { EmployeeTable, EmployeeList, TableHeader } from "./EmployeeTable";
import API from "../utils/API";

function ResultContainer () {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [button, setButton] = useState("Search");
  
  useEffect(() => {
      loadEmployees()
  }, [])

  function handleInputChange(event) {
    event.preventDefault();
    setSearch(event.target.value)
    console.log(event.target.value)
  } 
  


 function handleFormSubmit(event) {
    event.preventDefault();
  setResults(filterItems(employees, search)) 
  console.log(filterItems(employees, search))
  setSearch("")
    if (button === "Search") {
      setButton("Return to Results")
    } else {
      setButton("Search")
    }
  };
    
  function filterItems(employees, search) {
    return employees.filter(function(employee) {
        return employee.location.state.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }
  
  function handleSort(event) {
    event.preventDefault(); 
    console.log("sort it!!")
  }

  async  function loadEmployees() {
    await API.getEmployees()
    .then(res => {
      setEmployees(res.data.results)
      setResults(res.data.results)
         
      })
      .catch(err => console.log(err));
  };
  console.log(results)
  
    return (
     
      <div>
        <SearchForm 
        value = {search}
        onChange={handleInputChange}
        onClick={handleFormSubmit}
        button={button}
       /> 
        {results.length ? (
          <EmployeeTable>
            <TableHeader
            onclick= {handleSort}/>
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
