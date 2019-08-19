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
              <h3>Key Details</h3>
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
