import React from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { createSubAdminApi, authToken, userInfo } from '../../api';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: null,
        password: null,
        mobile: null,
        plan: null,
        isLoading: false
      }
    }

    register = async () => {
      console.log("register")
      try {
        let {
          username,
          password,
          mobile,
          plan,
        } = this.state;
        this.setState({
          isLoading: true
        })
        console.log("state", this.state)

        // if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(phone))) {
        //   alert("enter valid email")
        // }
        let token = await localStorage.getItem(authToken)
        let createdby = await localStorage.getItem(userInfo)
        let createdAt = await localStorage.getItem(createdAt)
        let {user} = await createSubAdminApi.auth(`Bearer ${ token }`).post({plan, mobile, password, username, createdby, createdAt})
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
                    <h1 className="text-center" >Add Sub Admin</h1>
                    <p className="text-muted text-center">Create your account</p>
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
                        <i className="icon-phone"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Contact Number"required onChange={e => this.setState({mobile:e.target.value})}/>
                    </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-cursor"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select" placeholder="Select Package" name="MicrosoftWindowServer2012R2Base" onChange={(e) => this.setState({ plan: e.target.value })}>
                      <option value="default">Select Plan</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                    </Input>
                  </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" required onChange={e => this.setState({password:e.target.value})}/>
                    </InputGroup>
                    <Button type="submit" color="success" block onClick={this.register}>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
