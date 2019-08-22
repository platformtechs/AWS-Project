import React from "react";
import {
  TabContent,
  Table,
  FormGroup,
  Label,
  Input,
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
              <h3>Key Details</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <h3>Role</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              <h3>Password</h3>
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
                        <td>Role Name : </td>
                        <td>Admin</td>
                      </tr>
                      <tr>
                        <td>Object ID : </td>
                        <td>xxxx</td>
                      </tr>
                      <tr>
                        <td>Validity : </td>
                        <td>31-09-2019</td>
                      </tr>
                      <tr>
                        <td>Active : </td>
                        <td>True</td>
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
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <div container>
                  <br />
                  <br />
                  <Table>
                    <h3>Roles</h3>
                    <tbody>
                      <tr><td>
                      <FormGroup check>

                        <Label check>
                          <Input type="checkbox" /> Admin
                        </Label>

                  </FormGroup></td>
                      </tr>
                      <tr><td>
                      <FormGroup check>

                        <Label check>
                          <Input type="checkbox" /> Sub-Admin
                        </Label>



                  </FormGroup></td>
                      </tr>
                      <tr><td>
                      <FormGroup check>


                        <Label check>
                          <Input type="checkbox" /> User
                        </Label>

                  </FormGroup></td>
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
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <div container>
                  <br />
                  <br />
                  <Table>
                    <tbody>
                      <tr>
                        <td>Login ID : </td>
                        <td>Admin</td>
                      </tr>

                      <tr>
                        <td>Password : </td>
                        <td>XXXX</td>
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
