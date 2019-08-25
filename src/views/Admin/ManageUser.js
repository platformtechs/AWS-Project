import React, { Component } from "react";
import {
  Button,
  Row,
  InputGroup,
  Table,
  Col,
  Container,
  Spinner
} from "reactstrap";
import { Link } from "react-router-dom";
import { listResourceApi, authToken, userInfo, UserApi } from "./../../api";
import { promises } from "fs";
// import { user } from "./data1.json";

export default class Query extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading:false
    }
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    try {
      this.setState({isLoading:true})
      let token = await localStorage.getItem(authToken);
      let _id = await localStorage.getItem(userInfo)
      let {result}= await listResourceApi.auth(`Bearer ${token}`).post({_id, usertype:"SUBADMIN"}).json();
      // let result = user
      console.log("result", result)
      this.setState({users:result, isLoading:false})
    } catch (error) {
      console.log("err", error);
      this.setState({ isLoading: false });
    }
  }

  render() {
    let {users, isLoading} = this.state;
    let userData = users && users.length > 0 ? users.map((user, index) => {
      let  userLink = {
        pathname:"/tabUser",
        user
      }
      return(
        <tr key={index}>
        <th scope="row">{index +1 }</th>
        <td>
          <Link to={userLink}>{user.username}</Link>
        </td>
        <td>{user.email}</td>
          <td>{!user.isdeactivated ? "Active":"Deactive"}</td>
      </tr>
      )
    }
      ):"no data";
    return (
      <div
        className="container"
        style={{ backgroundColor: "white", padding: 20, marginBottom: 20 }}
      >
        <Container>
          <Row>
            <Col sm="6">
            </Col>
            <Col sm={{ size: 3, offset: 3 }}>
              <InputGroup>
                <Link to={"/formUser"}>
                  <Button color="danger">Add Admin</Button>
                </Link>
              </InputGroup>
            </Col>
          </Row>
          {/* <Form>
            <hr />
            <FormGroup row>
              <Col sm={11}>
                <Input
                  placeholder="Enter name to search for Role"
                  required
                />
              </Col>
              <Button color="primary">Search</Button>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </Input>
            </FormGroup>
          </Form> */}
          {isLoading ? (
            <div className = "app flex-row align-items-center justify-content-center" >
              <Spinner style={{width:"5rem", height:"5rem"}} color="primary"/>
            </div>
          ) : (
            <Table style={{marginTop:"20px"}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{userData}</tbody>
            </Table>
          )}
        </Container>
      </div>
    );
  }
}
