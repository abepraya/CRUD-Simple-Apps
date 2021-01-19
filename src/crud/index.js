import React, { Component } from "react";
import Formulir from "./Formulir";
import { NavbarComponent } from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      name: "",
      age: 0,
      address: "",
      city: "",
      job: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        employees: [
          ...this.state.employees,
          {
            id: this.state.employees.length + 1,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            city: this.state.city,
            job: this.state.job,
          },
        ],
      });
    } else {
      const DaftarYangSelainDiPilih = this.state.employees
        .filter((employee) => employee.id !== this.state.id)
        .map((filterEmployee) => {
          return filterEmployee;
        });

      this.setState({
        employees: [
          ...DaftarYangSelainDiPilih,
          {
            id: this.state.employees.length + 1,
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            city: this.state.city,
            job: this.state.job,
          },
        ],
      });
    }

    this.setState({
      name: "",
      age: 0,
      address: "",
      city: "",
      job: "",
      id: "",
    });
  };

  editData = (id) => {
    const DaftarYangDiPilih = this.state.employees
      .filter((employee) => employee.id === id)
      .map((filterEmployee) => {
        return filterEmployee;
      });

    this.setState({
      name: DaftarYangDiPilih[0].name,
      age: DaftarYangDiPilih[0].age,
      address: DaftarYangDiPilih[0].address,
      city: DaftarYangDiPilih[0].city,
      job: DaftarYangDiPilih[0].job,
      id: DaftarYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const EmployeeBaru = this.state.employees
      .filter((employee) => employee.id !== id)
      .map((filterEmployee) => {
        return filterEmployee;
      });

    this.setState({
      employees: EmployeeBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel
            employees={this.state.employees}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
