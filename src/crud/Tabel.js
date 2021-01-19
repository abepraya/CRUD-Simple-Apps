import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = ({ employees, editData, hapusData }) => {
    return (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Employee</th>
      <th>Age</th>
      <th>Address</th>
      <th>City</th>
      <th>Job</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {employees.map((employee, index) => {
          return (
            <tr key={index} >
              <td>{index+1}</td>
              <td>{employee.name}</td>
              <td>{employee.age} tahun</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td>{employee.job}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editData(employee.id) }>Edit</button>
                <button className="btn btn-danger" onClick={() => hapusData(employee.id) }>Hapus</button>
              </td>
            </tr>
          );
        })}
  </tbody>
</Table>
      

    )
}

export default Tabel