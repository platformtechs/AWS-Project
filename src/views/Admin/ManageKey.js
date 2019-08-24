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
import {user} from "./key.json";


export default class Query extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoading:false,
      isAlert:false,
      isLogedIn:false,
      loginNumber:null,
      displayUserName:null,
      username:""
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
      // let {result} = await listResourceApi.auth(`Bearer ${ token }`).post({_id, usertype:"AWSADMIN"}).json()
      let result = user;
      console.log("result", result)
      this.setState({users:result, isLoading:false})
    } catch (error) {
      console.log("err", error);
      this.setState({ isLoading: false });
    }
  }

  handleLogin = async (user, index) => {
    let {isLogedIn} = this.state;
    console.log("this", this.state)
    console.log("login")
    try {
      if (!isLogedIn) {
        await localStorage.setItem("aws/awsId", user.id);
        await localStorage.setItem("aws/username", user.username)
        this.setState({ isLogedIn: true, loginNumber: index, isAlert: true, username: user.username })
        setTimeout(()=>this.setState({isAlert:false, displayUserName: true, }),1000)


      } else {
        if(this.state.loginNumber !== index){
          alert("please logout first");
          return 1;
        }
        await localStorage.removeItem("aws/awsId");
        await localStorage.removeItem("aws/username");
        this.setState({ isLogedIn: false, loginNumber:null, username:"" })
      }
    } catch (error) {
      console.log("eror : ", error);
    }

  }

  render() {
    let { users, isLoading, isAlert, loginNumber, displayUserName, username } = this.state;
    let userData = users
      ? users.map((user, index) => {
          let userLink = {
            pathname: "/tabUser",
            user
          };
        let maskedaccesskey = 'XXXXXXXX' + user.accesskey.slice(-4);

          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <Link to={userLink}>{user.username}</Link>
              </td>
              <td>{maskedaccesskey}</td>
              <td>{user.accessid}</td>
              <td><button className="btn btn-primary" onClick={()=>this.handleLogin(user, index)}>{loginNumber === index ? "Logout" : "Login"}</button></td>
            </tr>
          );
        })
      : "no data";
    return (
      <div>
        {isAlert && <div className="alert alert-success" role="alert">
          Login Successful!
        </div>}
      <div
        className="container"
        style={{ backgroundColor: "white", padding: 20, marginBottom: 20 }}
      >
        <Container>
          <Row>
            <Col sm="5">
                {displayUserName && <div className="alert alert-success" role="alert">
                  Logged in as : {username}
        </div>}
        </Col>
        <Col sm="1" />
            <Col sm={{span:3, offset:3}}>
              <InputGroup>
                <Link to={"/form"}>
                  <Button color="danger">CLick to Add Key</Button>
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
            <Table style={{marginTop:'10px'}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Acess Key</th>
                  <th>Access Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{userData}</tbody>
            </Table>
          )}
        </Container>
      </div>
      </div>
    );
  }
}
