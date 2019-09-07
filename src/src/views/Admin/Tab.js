import React from "react";
import {
  TabContent,
  Table,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
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
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <h3>Instance Details</h3>
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
                        <td>Admin</td>
                      </tr>
                      <tr>
                        <td>Email-id : </td>
                        <td>abc121@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Access Key : </td>
                        <td>174duebafhhdau87233ry2-1284u9-81qjweh3u</td>
                      </tr>
                      <tr>
                        <td>Access Id : </td>
                        <td>djesrg28o42fb3oq8ry2bwhefw-jsdbh_ue93d7</td>
                      </tr>
                      <tr>
                        <td>Status : </td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div class="text-left">
                    <Link to={"/dashboard"}>
                      <Button class="display-2" color="secondary" size="lg">
                        Back
                      </Button>
                    </Link>
                    {"    "}
                    <Button class="display-2" color="success" size="lg">
                      Edit
                    </Button>
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

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <div className="container">
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td>Instance Name : </td>
                        <td>Admin</td>
                      </tr>
                      <tr>
                        <td>Instance region : </td>
                        <td>abasf45f</td>
                      </tr>

                    </tbody>
                  </Table>
                  <div class="text-left">
                    <Link to={"/dashboard"}>
                      <Button class="display-2" color="secondary" size="lg">
                        Back
                      </Button>
                    </Link>
                    {"    "}
                    <Button class="display-2" color="success" size="lg">
                      Edit
                    </Button>
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
