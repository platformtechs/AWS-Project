import React from "react";
import {
  TabContent,
  Table,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Spinner,
  Container
} from "reactstrap";
import classnames from "classnames";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getUser, authToken, userInfo } from "../../api";
import {user} from "./data.json";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      isLoading:false,
      user:this.props.location.user
    };
  }
  UNSAFE_componentWillMount() {
      console.log("hi",this.props.location.user)
    if(!this.props.location.user){
        console.log("component")
        this.setState({isLoading:true})
      this.fetchData()
    }
  }

  fetchData = async () => {
    try {
      let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    // let {user} = getUser.auth(`Bearer ${token}`).post({_id}).json()
    let users = user
    this.setState({user:users, isLoading:false})
    } catch (error) {
      console.log("err", error)
      this.setState({isLoading:false})
    }
    
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    console.log(this.props)
    console.log(this.state)
    let {isLoading} = this.state
    let users = this.state.user
    let user = users && users.length > 0 && users[0] || this.state.user
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <h3>Instance Details</h3>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
                <Container>
                  <br />
                  <br />
                  {isLoading ? (
                    <div className="app flex-row align-items-center justify-content-center">
                    <Spinner
                        style={{ width: "5rem", height: "5rem" }}
                        color="primary"
                    />
                    </div>
                ) : (
                  <Table>
                    <tbody>
                      <tr>
                        <td>User Name : </td>
                        <td>{user.username}</td>
                      </tr>
                      <tr>
                        <td>Password : </td>
                        <td>{user.password}</td>
                      </tr>
                      <tr>
                        <td>Ip Address : </td>
                        <td>{user.instanceip}</td>
                      </tr>
                      <tr>
                        <td>Instace Type : </td>
                        <td>{user.instanceType}</td>
                      </tr>
                       <tr>
                        <td>Instace Id : </td>
                        <td>{user.instanceid}</td>
                      </tr>
                      <tr>
                        <td>Region: </td>
                        <td>Mumbai</td>
                      </tr>
                      <tr>
                        <td>Status : </td>
                        <td>{user.status}</td>
                      </tr>
                    </tbody>
                  </Table>)}
                  <div className="text-center">
                    <Link to={"/manage-instance"}>
                      <Button color="primary" style={{margin:"10px"}}>
                        Back
                      </Button>
                    </Link>
                    {"    "}
                    <Button color="success" style={{margin:"10px"}}>
                      Start Instance
                    </Button>
                    {"    "}
                    <Button color="warning" style={{margin:"10px"}}>
                      Stop Instance
                    </Button>
                    {"    "}
                    <Button color="info" style={{margin:"10px"}}>
                      Reboot Instance
                    </Button>
                    {"    "}
                    <Button color="danger" style={{margin:"10px"}}>
                      Delete Instance
                    </Button>
                    {"    "}
                  </div>
                </Container>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
