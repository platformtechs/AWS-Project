import React from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { createSubAdminApi, authToken, userInfo, createInstance } from '../../api';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: null,
        password: null,
        email: null,
        password2: null,
        isLoading: false
      }
    }

    register = async () => {
      console.log("register")
      try {
        let {
          username,
          password,
          email,
          password2
        } = this.state;
        this.setState({
          isLoading: true
        })
        console.log("state", this.state)
        if (password !== password2) {
          alert("password not matched")
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
          alert("enter valid email")
        }
        let token = await localStorage.getItem(authToken)
        let _id = await localStorage.getItem(userInfo)
        let {user} = await createInstance.auth(`Bearer ${ token }`).post({email, password, username, _id})
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
                    <h1 className="text-center" >create Instance</h1>
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
                        <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                    <Input type="select" placeholder="InstanceType" name="MicrosoftWindowServer2012R2Base" >
                      <option value="default">Select Instance Type</option>
                      <option value="T3.MEDDIUM">T3.MEDDIUM</option>
                      <option value="T2.XLARGE">T2.XLARGE</option>
                      <option value="T2.SMALL">T2.SMALL</option>
                      <option value="M5D.XLARGE">M5D.XLARGE</option>
                      <option value="M5D.2XLARGE">M5D.2XLARGE</option>
                    </Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" placeholder="InstanceType" name="MicrosoftWindowServer2012R2Base" >
                      <option value="start">Select OS</option>
                      <option value="ami-03d1bbb0fb080106a">Microsoft Windows Server 2012 R2 Base</option>
                      <option value="ami-028b3bf1662e6082f">Microsoft Windows Server 2019 Base</option>
                    </Input>
                    </InputGroup>
                    <Button color="success" block onClick={this.register}>Create Instance</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
