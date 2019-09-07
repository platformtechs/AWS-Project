import React, { Component } from "react";
import {
  Button,
  Row,
  InputGroup,
  Table,
  Col,
  Container,
  Input,
  Spinner
} from "reactstrap";
import { Link } from "react-router-dom";
import { authToken, userInfo, listResourceApi, userType, getUserApi } from "../../api";
import {user} from "./data.json";

export default class Query extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading:false,
      status:'start',
      usertype:''
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
      let usertype = await localStorage.getItem(userType);
      let data = []
      if(usertype === "USER"){
        let {user} = await getUserApi.auth(`Bearer ${ token }`).post({_id}).json()
        data.push(user);
      } else {
        let {result} = await listResourceApi.auth(`Bearer ${ token }`).post({_id, usertype:"USER"}).json()
        data = result
      }
      
      console.log("result", data)
      this.setState({users:data, isLoading:false, usertype})
    } catch (error) {
      console.log("err", error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    let { users, isLoading, usertype } = this.state;
    let userData = users
      ? users.map((user, index) => {
          let userLink = {
            pathname: "/instance",
            user
          };
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <Link to={userLink}>{user.username}</Link>
              </td>
              <td>{user.panelpass}</td>
              <td>{user.expiredat.split("T")[0]}</td>
              <td>{user.instancestatus}
              {/* <Input type="select" name="status" onChange={(e) => {
                this.setState({status:e.target.value});
                alert(`You choosed ${e.target.value} status`)
                }}>
                <option value="start">Start</option>
                <option value="stop">Stop</option>
                <option value="delete">Delete</option>
                <option value="reboot">Reboot</option>
              </Input> */}
              </td>
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
          <h3 className="text-center">{usertype ==="USER" ? "instance": "All Instances"}</h3>
          {/* <Row>
            <Col sm="6" />
            <Col sm="6">
              <InputGroup>
                <h3>Click to create VPS {" "}</h3>{" "}
                <Link to={"/formInstance"}>
                  <Button color="danger">Create VPS</Button>
                </Link>
              </InputGroup>
            </Col>
          </Row> */}
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
                  <th>Username</th>
                  <th>Panel Password</th>
                  <th>Expired At</th>
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
