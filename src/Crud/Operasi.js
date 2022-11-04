import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Input, Button, Col, } from "reactstrap";

export default class Operasi extends Component {
  constructor() {
    super();

    this.state = {
      nilai1: null,
      nilai2: null,
      operator: null,
      hasil: null,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;
    //
    var hasil;
    switch (operator) {
      case "+":
        hasil = nilai1 + nilai2;
        break;
      case "-":
        hasil = nilai1 - nilai2;
        break;
      case "*":
        hasil = nilai1 * nilai2;
        break;
      case "/":
        hasil = nilai1 / nilai2;
        break;
    }
    this.setState({nilai1, nilai2, operator, hasil});
    this.refs.nilai1.value = null;
    this.refs.nilai2.value = null;
}
  renderHasil() {
    const {nilai1, nilai2, operator, hasil} = this.state;
    if (this.state.hasil) {
        return (
            <div>
                <br/>
                <p className="alert">
                    {nilai1+operator+nilai2+"="+hasil}
                </p>
            </div>
        )
    }

  }

  render() {
    return (
     <div>
        <Container>
        <Link to={"/"}>
          <Button color="dark" className="mr-2 mb-3">
            Back
          </Button>
        </Link>
        <Col>
        <Form onSubmit={this.handleSubmit.bind(this)}>
            <label>Nilai : </label>
            <Input type="number" ref="nilai1" className="form-control"></Input>
            <Input type="number" ref="nilai2" className="form-control"></Input>
            <label>Operasi</label>
            <select ref="operator" className="form-control">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <Button color="dark" className="mr-2 mb-3">Submit</Button>
        </Form>
        {this.renderHasil()};
        </Col>
        </Container>
     </div>   
    );
  }
}
