import React from "react";

const List = ({ data, headers }) => {
  return (
    <div className="container">
      <h2>CONTACTOS</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {headers && headers.map((x, index) => (
              <th key={index}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.nombre}</td>
              <td>{x.apellido}</td>
              <td>{x.numeroTelefono}</td>
              <td>{x.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
