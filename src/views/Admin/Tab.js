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
<<<<<<< HEAD
              <h3>Key Details</h3>
=======
              <h3>User Details</h3>
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
<<<<<<< HEAD
              <h3>Permission</h3>
=======
              <h3>Instance Details</h3>
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
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
<<<<<<< HEAD
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
=======
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
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
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
<<<<<<< HEAD
                    <Button class="display-2" color="success" size="lg">
                      Edit
                    </Button>
=======
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
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
<<<<<<< HEAD
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
=======
            <Row>
              <Col sm="6">
                <div container>
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

>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
        </TabContent>
      </div>
    );
  }
}
