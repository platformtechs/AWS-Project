import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../../../api';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      oldPassword: null,
      newPassword: null,
      confirmPassword: null
    }
  }
  submit = async () => {
    try {
      console.log("submit", this.state);
      let { name, email, oldPassword, newPassword, confirmPassword } = this.state;
      let authToken = localStorage.getItem("authToken")

      let { user } = await createUser.auth(`Bearer ${authToken}`).post({ name, email, oldPassword, newPassword, confirmPassword }).json()
      console.log("user", user)
      this.props.history.push("/") //edit krna hai
    } catch (error) {
      console.log("err", error)
    }
  }
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="email" id="exampleEmail" placeholder="edit name"
              onChange={e => this.setState({ name: e.target.value })}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="edit email"
              onChange={e => this.setState({ email: e.target.value })}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Old Password</Label>
          <Col sm={10}>
            <Input type="text" name="password" id="examplePassword" placeholder="old password "
              onChange={e => this.setState({ oldPassword: e.target.value })}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>New Password</Label>
          <Col sm={10}>
            <Input type="text" name="password" id="examplePassword" placeholder="new password "
              onChange={e => this.setState({ newPassword: e.target.value })}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Confirm Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="confirm password "
              onChange={e => this.setState({ confirmPassword: e.target.value })}/>
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Active</option>
            <option>Deactivate</option>
            <option>Suspended</option>
          </Input>
          </Col>
        </FormGroup>  */}
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="warning" onClick={this.submit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
