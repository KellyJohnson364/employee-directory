import React from "react";

// Table for header and body
export function EmployeeTable({children}) {

  return (  
    <table className="m-4 table-responsive table-border rounded bg-light table table-striped"> 
        {children}
    </table>
  )}
    
//Table body for employee information   
export function EmployeeList(props) {
  return (
    <tbody className="">
     <tr>
         <th scope="row">{props.id}</th>
         <td><img src={props.picture}/></td>
         <td>{props.first}</td>
         <td>{props.last}</td>
         <td>{props.phone}</td>
         <td>{props.number} {props.street}, {props.city}, {props.state}, {props.zip}</td> 
       </tr> 
       </tbody>  
          )
     
}
// Header with sort button 
export function TableHeader(props) {
  return (
    <thead>
          <tr>
            <th></th>
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th>
              <button onClick={props.sortLast} scope="col-4">Last <span>{props.direction}</span></button>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>  
  )
     
}         
