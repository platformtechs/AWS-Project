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
import { listResourceApi, authToken, userInfo} from "./../../api";
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
      console.log("error : ", error);
      this.setState({
        isLoading: false
      });
    }
  }

  handleSubAdmin = (isactivated) => {
      this.setState((prevState) => ({
        isactivated: !prevState.isactivated
      }))
      console.log('isactivated: ' + isactivated)
     }

  handleDelete = (_id) => {
      const filteredItems = this.state.users.filter(user => {
        return user._id !== _id;
      })
      this.setState({
        users: filteredItems,
      })
       console.log('Delete Button!');
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
          <td>{user.mobile}</td>
          <td>{user.plan}</td>
          <td></td>
          <td></td>
          <td><Button onClick={() => this.handleSubAdmin(user.isactivated)}>{user.isactivated ? "Deactivate" : "Activate"}</Button></td>
          <td><Button color="primary">Send</Button></td>
          <td><Button color="danger" onClick={() => this.handleDelete(user._id)}>Delete</Button></td>
        </tr>
      )
    }
      ):<tr><td>No data</td></tr>;
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
                  <Button color="danger">Create Sub-Admin</Button>
                </Link>
              </InputGroup>
            </Col>
          </Row>
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
                  <th>Phone</th>
                  <th>Plan</th>
                  <th>Date Created</th>
                  <th>Days Remaining</th>
                  <th>Action</th>
                  <th>Send Message</th>
                  <th>Terminate</th>
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
