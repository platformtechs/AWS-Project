import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Access Key</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1 xvhasgwfdqwty45qedbmahg83bmdkjahdi-d</option>
            <option>DBYUAWBFWaskjdguyw82-3e2ebdh</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Username</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter username" />
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
