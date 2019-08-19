import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Access Key</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter access key" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Access ID</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter access id" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button color="danger">Submit</Button>
      </Form>
    );
  }
}
