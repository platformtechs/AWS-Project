import React from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import {authToken, userInfo, createInstanceApi, getPassApi } from '../../api';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username:null,
        instanceType:"default",
        os: "default",
        days: "default",
        isLoading: false
      }
    }

    handleSubmit = async () => {
      console.log("submit")
      try {
        let {
          username,
          instanceType,
          os,
          days
        } = this.state;
        if(os === "default") {
          alert("select operating system")
          return
        }
        if(days === "default") {
          alert("select the packages")
          return
        }
        if(instanceType === "default"){
          alert("select instance type")
          return
        }
        this.setState({
          isLoading: true
        })
        console.log("state", this.state)
    
        let token = await localStorage.getItem(authToken)
        // let _id = await localStorage.getItem(userInfo)
        let adminId = this.props.location.user._id
        console.log("admin", adminId)
        let {result} = await createInstanceApi.auth(`Bearer ${ token }`).post({adminId, os, instanceType, username, days}).json()
        setTimeout(async()=>await getPassApi.auth(`Bearer ${ token }`).post({_id:result.adminId, instanceid:result.instanceid}).json(),300000)
        console.log("usr", result)
        this.props.history.goBack();
        alert("user created")
      } catch (error) {
        console.log("err", error)
        this.setState({
          isLoading: false
        })
        alert("error")
        this.props.history.goBack();
      }
    }
  render() {
    let { isLoading } = this.state
    console.log("state", this.state)
    console.log("props", this.props)
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
                        <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                    <Input type="select" placeholder="InstanceType" name="MicrosoftWindowServer2012R2Base" onChange={(e)=>this.setState({instanceType:e.target.value})}>
                      <option value="default">Select InstanceType</option>
                      <option value="t2.micro">T2 MICRO</option>
                      <option value="t2.small">T2 SMALL</option>
                      <option value="t2.meddium">T2 MEDDIUM</option>
                      <option value="t2.large">T2 LARGE</option>
                      <option value="t2.xlarge">T2 XLARGE</option>
                    </Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" placeholder="OperatinSystem" name="MicrosoftWindowServer2012R2Base" onChange={(e)=>this.setState({os:e.target.value})}>
                      <option value="default">Select OS</option>
                      <option value="ami-03d1bbb0fb080106a">Microsoft Windows Server 2012 R2 Base</option>
                      <option value="ami-028b3bf1662e6082f">Microsoft Windows Server 2019 Base</option>
                    </Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-cursor"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" placeholder="Select Package" name="MicrosoftWindowServer2012R2Base" onChange={(e)=>this.setState({days:e.target.value})}>
                      <option value="default">Select Package</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                    </Input>
                    </InputGroup>
                    <Button color="success" block onClick={this.handleSubmit}>Create Instance</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
