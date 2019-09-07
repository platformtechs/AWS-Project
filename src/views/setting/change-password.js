import React from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { authToken, userInfo, changePassword,} from '../../api';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        oldPassword:null,
        password: null,
        password2: null,
        isLoading: false
      }
    }

    register = async () => {
      console.log("register")
      try {
        let {
          password,
          password2,
          oldPassword
        } = this.state;
        this.setState({
          isLoading: true
        })
        console.log("state", this.state)
        if (password !== password2) {
          alert("password not matched")
        }
        let oldToken = await localStorage.getItem(authToken)
        let _id = await localStorage.getItem(userInfo)
        let { token } = await changePassword.auth(`Bearer ${ oldToken }`).post({_id, password, oldPassword}).json()
        this.setState({
          isLoading: false
        })
        await localStorage.setItem(authToken, token)
        this.props.history.goBack();
        alert("Password changed")
      } catch (error) {
        console.log("err", error)
        alert("error try again");
        this.setState({
          isLoading: false
        })
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
      <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="10" xl="10">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1 className="text-center" >Change Password</h1>
                    <p className="text-muted text-center">Change your panel password</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Old Password" required onChange={e => this.setState({oldPassword:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="New Password" required onChange={e => this.setState({password:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Confirm New Password" required onChange={e => this.setState({password2:e.target.value})}/>
                    </InputGroup>
                    <Button color="success" block onClick={this.register}>Submit</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
