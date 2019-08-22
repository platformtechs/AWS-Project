import React from "react";
import {
  TabContent,
  Table,
<<<<<<< HEAD
  FormGroup,
  Label,
  Input,
=======
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
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
<<<<<<< HEAD
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
=======

>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
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
=======
                        <td>Name : </td>
                        <td>User</td>
                      </tr>
                      <tr>
                        <td>Email-id : </td>
                        <td>dfj232@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Password : </td>
                        <td>eluga129</td>
                      </tr>
                      <tr>
                        <td>Access Key: </td>
                        <td>174duebafhhdau87233ry2-1284u9-81qjweh3u</td>
                      </tr>
                      <tr>
                        <td>Access Id: </td>
                        <td>diwhe7238rbduye87320dnqiwdj7238_duq3d38</td>
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

<<<<<<< HEAD

=======
>>>>>>> c702315551e2a5c807897592d3685e17fb776d4f
        </TabContent>
      </div>
    );
  }
}
