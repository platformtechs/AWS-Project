import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createUser } from '../../../api';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessKey: null,
      username: null,
      password: null
    }
  }

  submit = async () => {
    try {
      console.log("submit", this.state);
      let { accessKey, email, password } = this.state;
      let authToken = localStorage.getItem("authToken")

      let { user } = await createUser.auth(`Bearer ${authToken}`).post({ accessKey, email, password }).json()
      console.log("user", user)
      this.props.history.push("/") //edit krna hai
    } catch (error) {
      console.log("err", error)
    }
  }


  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect" onChange={e => this.setState({ accessKey: e.target.value })}>Access Key</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1 xvhasgwfdqwty45qedbmahg83bmdkjahdi-d</option>
            <option>DBYUAWBFWaskjdguyw82-3e2ebdh</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" onChange={e => this.setState({ username: e.target.value })}>Username</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="enter username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" onChange={e => this.setState({ password: e.target.value })}>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button color="danger" onClick={this.submit}>Submit</Button>
      </Form>
    );
  }
}
