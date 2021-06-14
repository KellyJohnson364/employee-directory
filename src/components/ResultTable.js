import React from "react";

function ResultTable(props) {
  return (
    <div>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Picture</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">DOB</th>
      <th scope="col">Address</th>
      <th scope="col">Nationality</th>
    </tr>
  </thead>
  <tbody className="table table-striped">
      {props.results.map(result => (
         <tr key={result.id.value}>
         <th scope="row">{result.id.value}</th>
         <td>{result.picture.medium}</td>
         <td>{result.name.first}</td>
         <td>{result.name.last}</td>
         <td>{result.dob.date}</td>
         <td>{result.location.street},{result.location.city},{result.location.state},{result.location.postcode}</td>
         <td>{result.nat}</td>
       </tr>
      ))}
    </tbody>
    </table>
    </div>
  );
}

export default ResultTable;
