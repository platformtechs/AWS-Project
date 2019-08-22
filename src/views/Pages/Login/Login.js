import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { UserApi, loginUser } from '../../../api';


class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    email:null,
    password:null
  }
}
  login = async () => {
    try {
      console.log("login", this.state);
      let {email, password} = this.state
      if (email.length > 5 && password.length > 3) {
        console.log("validated")
      } else {
        alert("email or password wrong")
      }
      let {user, token } = await loginUser.post({email, password}).json()
      console.log("user", user)
      localStorage.setItem('authToken', token);
      this.props.history.push('/');
    } catch (error) {
      console.log("err", error)
    }
  }

  // validateEmail = (e) => {
  //     const email = e.target.value;
  //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     if( re.test(String(email).toLowerCase())){
  //       console.log("tttyy");
  //     }
  //     else{
  //       console.log("err");
  //     }
  //   }

  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="email" required onChange={e=>this.setState({email:e.target.value})}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" required onChange={e => this.setState({ password: e.target.value })}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum 1dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;



// some ruff stuff

// services
// ->articleServices

// export const getarticles = async (data)=>{
//   return await axios.get(getAllarticles,data);
// }



// const {data} =  await getarticles({postid:"5347254738"});

// index.js

// export const getAllarticles = '${host}/getartcles'
