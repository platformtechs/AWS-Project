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
              <h3>Permission</h3>
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
            {" "}
            <hr />
            {/* Module Management */}
            <Label>
              <b>Module Management</b>
            </Label>
            <hr />
            <Row>
              <Col xs="6" ms="2">
                Module List
              </Col>
              <Col xs="6">

                  <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

            </Row>
            <Row>
              <Col xs="6">Module Add</Col>
              <Col xs="6">

                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

            </Row>
            <Row>
              <Col xs="6">Module Edit</Col>
              <Col xs="6">

                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

            </Row>{" "}
            <hr />
            {/* User Management */}
            <Label>
              <b>User Management</b>
            </Label>
            <hr />
            <Row>
              <Col xs="6" ms="2">
                User List
              </Col>
              <Col xs="6">

                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

            </Row>
            <Row>
              <Col xs="6">User Add</Col>
              <Col xs="6">

                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>

            </Row>
            <Row>
              <Col xs="6">User Edit</Col>
              <Col xs="6">
              <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                User List
              </Col>
              <Col xs="6">

                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
            <Row>
              <Col xs="6" ms="2">
                User Add
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                My Profile
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                Change Password
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                Setting Edit
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                Approve Users
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col xs="6" ms="2">
                Enquiry List
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <hr />
            {/* Function Management */}
            <Label>
              <b>Module Management</b>
            </Label>
            <hr />
            <Row>
              <Col xs="6" ms="2">
                Function List
              </Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col xs="6">Function Add</Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col xs="6">Function Edit</Col>
              <Col xs="6">
                <FormGroup check>
                    <Row>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> View
                        </Label>
                      </Col>
                      <Col xs="6">
                        <Label check>
                          <Input type="checkbox" /> Edit
                        </Label>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
            </Row>{" "}

            <hr />
            <div class="text-center">
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
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
