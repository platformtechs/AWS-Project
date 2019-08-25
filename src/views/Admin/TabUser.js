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
  Spinner
} from "reactstrap";
import classnames from "classnames";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getUser, authToken, userInfo } from "../../api";

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
    }
  }

  fetchData = async () => {
    try {
      let token = await localStorage.getItem(authToken)
    let _id = await localStorage.getItem(userInfo)
    let {user} = getUser.auth(`Bearer ${token}`).post({_id}).json()
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
                <div container>
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td>Name : </td>
                        <td>{user.username}</td>
                      </tr>
                      <tr>
                        <td>Email-id : </td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Password : </td>
                        <td>XXXXXXXXXXXX</td>
                      </tr>
                      <tr>
                        <td>Access Id : </td>
                        <td>{user.accessid}</td>
                      </tr>
                      <tr>
                        <td>Access Key : </td>
                        <td>{user.accesskey}</td>
                      </tr>
                      <tr>
                        <td>Status : </td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div class="text-left">
                    <Link to={"/manage-subadmin"}>
                      <Button class="display-2" color="secondary" size="lg">
                        Back
                      </Button>
                    </Link>
                    {"    "}
                    <Link to={"/keyEdit"}>
                    <Button class="display-2" color="success" size="lg">
                      Edit
                    </Button>
                    </Link>
                    {"    "}
                    <Link to={"/login"}>
                      <Button class="display-2" color="primary" size="lg">
                        Log In
                      </Button>
                    </Link>
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
