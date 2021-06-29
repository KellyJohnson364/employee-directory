import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { EmployeeTable, EmployeeList } from "./EmployeeTable";
import API from "../utils/API";

function ResultContainer () {
  const [employees, setEmployees] = useState([]);
  const [employeeSearch, setEmployeeSearch] = useState("");
  
  useEffect(() => {
      loadEmployees()
  }, [])

  async  function loadEmployees() {
    await API.getEmployees()
    .then(res => {
      setEmployees(res.data.results)
         console.log(res.data.results)
      })
      .catch(err => console.log(err));
  };
   console.log(employees)
    return (
      <div>
        {employees.length ? (
          <EmployeeTable>
            {employees.map(employee => (
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
