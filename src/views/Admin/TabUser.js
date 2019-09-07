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
} from "reactstrap";
import classnames from "classnames";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import {authToken, userInfo, getUserApi } from "../../api";

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
  componentDidMount(){
    if(!this.props.location.user){
      this.fetchData()
    } else {
      localStorage.setItem("temp", this.props.location.user._id)
    }
  }

  fetchData = async () => {
    try {
      let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {user} = getUserApi.auth(`Bearer ${token}`).post({_id}).json()
    this.setState({user:user, isLoading:false})
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

  componentDidCatch() {
    console.log("err")
    this.props.history.push('/')
  }
  
  render() {
    console.log(this.props)
    let user = this.state.user
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
              <h3>User Details</h3>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
                <div className="container">
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td>Name : </td>
                        <td>{user && user.username}</td>
                      </tr>
                      <tr>
                        <td>Email-id : </td>
                        <td>{user && user.email}</td>
                      </tr>
                      <tr>
                        <td>Password : </td>
                        <td>{user && user.panelpass || ''}</td>
                      </tr>
                      <tr>
                        <td>Status : </td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="text-left">
                    <Link to={"/manage-subadmin"}>
                      <Button className="display-2" color="secondary" size="lg">
                        Back
                      </Button>
                    </Link>
                    {"    "}
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}
