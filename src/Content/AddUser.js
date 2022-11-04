import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate;

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3001/users", {
        name,
        email,
        phone,
      });
      alert('data berhasil ditambahkan')
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Container>
        <Link to={"/"}>
          <Button color="dark" className="mr-2 mb-3">
            Back
          </Button>
        </Link>
        <Form onSubmit={saveUser}>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="insert name"
                />
              </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePhone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="insert phone"
                  />
                </FormGroup>
                </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplemail">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="insert email"
                  type="email"
                />
                </FormGroup>
            </Col>
          </Row>
          <Button type="submit" color="dark">
            Add User
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default AddUser;
