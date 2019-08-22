import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { createUser } from '../../../api';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessKey: null,
      accessId: null,
      email: null,
      password: null
    }
  }

  submit = async () => {
    try {
      console.log("submit", this.state);
      let { accessKey, accessId, email, password } = this.state;
      let authToken = localStorage.getItem("authToken")

      let { user } = await createUser.auth(`Bearer ${authToken}`).post({ accessKey, accessId, email, password }).json()
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
          <Label for="exampleEmail" onChange={e => this.setState({ accessKey: e.target.value })}>Access Key</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter access key" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" onChange={e => this.setState({ accessId: e.target.value })}>Access ID</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="enter access id" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" onChange={e => this.setState({ email: e.target.value })}>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
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
