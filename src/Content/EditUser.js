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
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";

const EditUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigate = useNavigate;

  useEffect(() => {
    getUserByID();
  },[]  );
  
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.patch(`http://localhost:3001/users/${id}`, {
        name,
        email,
        phone,
      });
      alert('data berhasil di edit');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserByID = async () => {
    const response = await Axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  };

  return (
    <div>
      <Container>
        <Link to={"/"}>
          <Button color="dark" className="mr-2 mb-3">
            Back
          </Button>
        </Link>
        <Form onSubmit={updateUser}>
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
                    type="number"
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
            Edit User
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default EditUser;
