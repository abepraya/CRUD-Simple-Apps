import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


const Formulir = ({name,age,address,city,job, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data" }</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={age}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={city}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="job">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                name="job"
                value={job}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
