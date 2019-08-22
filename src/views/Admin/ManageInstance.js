import React, { Component } from "react";
import {
  Button,
  Row,
  InputGroup,
  Table,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Spinner
} from "reactstrap";
import { Link } from "react-router-dom";
import { listResourceApi, authToken, userInfo } from "../../api";

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
      let {result} = await listResourceApi.auth(`Bearer ${ token }`).post({_id, usertype:"USER"}).json()
      console.log("result", result)
      this.setState({users:result, isLoading:false})
    } catch (error) {
      console.log("err", error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    let { users, isLoading } = this.state;
    let userData = users
      ? users.map((user, index) => {
          let userLink = {
            pathname: "/tab",
            user
          };
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <Link to={userLink}>{user.username}</Link>
              </td>
              <td>{user.instanceid}</td>
              <td>Mumbai</td>
              <td>Active</td>
            </tr>
          );
        })
      : "no data";
    return (
      <div
        className="container"
        style={{ backgroundColor: "white", padding: 20, marginBottom: 20 }}
      >
        <Container>
          <Row>
            <Col sm="6" />
            <Col sm="6">
              <InputGroup>
                <h3>Click to Add Key {" "}</h3>{" "}
                <Link to={"/form"}>
                  <Button color="danger">Add Key</Button>
                </Link>
              </InputGroup>
            </Col>
          </Row>
          {isLoading ? (
            <div className="app flex-row align-items-center justify-content-center">
              <Spinner
                style={{ width: "5rem", height: "5rem" }}
                color="primary"
              />
            </div>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Instance Id</th>
                  <th>region</th>
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
