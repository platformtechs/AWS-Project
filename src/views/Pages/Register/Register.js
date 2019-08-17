import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Auth} from 'aws-amplify';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:null,
      password: null,
      email: null,
      password2:null
    }
  }

  register = async () => {
    console.log("register")
    try {
      let {username, password, email, password2} = this.state;
      console.log("state", this.state)
      if( password !== password2){
        alert("password not matched")
      }
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        alert("enter valid email")
      }
      Auth.signUp({
          username,
          password,
          attributes: {
            email, // optional
            // other custom attributes 
          }
        })
        .then(data => {
          console.log("user", data)
          sessionStorage.setItem("aws@token", data.storage.authToken)
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log("err", error)
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" required onChange={e => this.setState({username:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email"required onChange={e => this.setState({email:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" required onChange={e => this.setState({password:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Comfirm password" required onChange={e => this.setState({password2:e.target.value})}/>
                    </InputGroup>
                    <Button color="success" block onClick={this.register}>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                       <i className="icon-social-facebook"></i>{' '}
                         <span> facebook</span>

                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><i className="icon-social-twitter"></i>{' '}<span> twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
