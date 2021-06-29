import React from "react";
import API from "../utils/API";

export function EmployeeTable({children}) {

  return (  
    <table className="table table-border table-striped">
       <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        </table>
  )}
    
    
export function EmployeeList(props) {
  return (
     <tr>
         <th scope="row">{props.id}</th>
         <td>
           <img 
           src={props.picture}
           />
           </td>
         <td>{props.first}</td>
         <td>{props.last}</td>
         <td>{props.phone}</td>
         <td>{props.number} {props.street}, {props.city}, {props.state} {props.zip}</td> 
       </tr> 
          )
     
}


