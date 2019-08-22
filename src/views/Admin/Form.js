import React from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { createKeyApi, authToken, userInfo } from '../../api';

export default class Example extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: null,
        password: null,
        accessid: null,
        accesskey: null,
        isLoading: false
      }
    }

    register = async () => {
      console.log("register")
      try {
        let {
          username,
          password,
          accesskey,
          accessid,
        } = this.state;
        this.setState({
          isLoading: true
        })
        console.log("state", this.state)
        let token = await localStorage.getItem(authToken)
        let createdby = await localStorage.getItem(userInfo)
        let {user} = await createKeyApi.auth(`Bearer ${ token }`).post({accessid, accesskey, password, username, createdby})
        console.log("usr", user)
        this.props.history.goBack();
        alert("user created")
      } catch (error) {
        console.log("err", error)
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
                    <h1 className="text-center" >Add Credentials </h1>
                    <p className="text-muted text-center">Create Aws Setup</p>
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
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" required onChange={e => this.setState({password:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Access Id"required onChange={e => this.setState({accessid:e.target.value})}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                          <InputGroupText>#</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Access key" required onChange={e => this.setState({accesskey:e.target.value})}/>
                    </InputGroup>
                    <Button color="success" block onClick={this.register}>Create Credential</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
