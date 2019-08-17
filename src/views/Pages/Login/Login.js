import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { Auth } from 'aws-amplify';

class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: null,
      password: null,
      isLoading: false
    }
  }

  login = async () => {
    try {
      let {username, password} = this.state
      this.setState({isLoading:true})
      console.log("state", this.state)
        Auth.signIn({
            username,
            password
          }).then(data => {
            console.log(data)
            console.log("idToken", data.signInUserSession.idToken.jwtToken)
            sessionStorage.setItem("aws@token", data.username)
            this.setState({isLoading:false})
            this.props.history.push("/")
          })
          .catch(err => {
            console.log("e", err)
            this.setState({isLoading:false})
          })
        }catch (error) {
        console.log("err", error)
        this.setState({isLoading:false})
      }      
  }

  render() {
    let { isLoading } = this.state
    if(isLoading){
      return (
        <div className = "app flex-row align-items-center justify-content-center" >
          <Spinner style={{width:"5rem", height:"5rem"}} color="primary"/>
        </div>
      )
      
    }
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
                        <Input type="text" placeholder="Username" required onChange={e => this.setState({username:e.target.value})}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" required onChange={e => this.setState({password:e.target.value})}/>
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
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
