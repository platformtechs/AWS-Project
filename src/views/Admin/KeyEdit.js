import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="email" id="exampleEmail" placeholder="edit name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="edit email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Old Password</Label>
          <Col sm={10}>
            <Input type="text" name="password" id="examplePassword" placeholder="old password " />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>New Password</Label>
          <Col sm={10}>
            <Input type="text" name="password" id="examplePassword" placeholder="new password " />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Confirm Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="confirm password " />
          </Col>
        </FormGroup>
        {<FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Active</option>
            <option>Deactivate</option>
            <option>Suspended</option>
          </Input>
          </Col>
        </FormGroup> }
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="warning">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
