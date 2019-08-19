import React, { Component } from 'react';
import { Button, Row, InputGroup, Table, Col, Container, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Query extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: 'white', padding: 20, marginBottom: 20 }}>
        <Container>

          <Row><Col sm="6"></Col>
            <Col sm="6">
              <InputGroup>
                <h3 >Click on "Add User" to Add User</h3>{' '}

                <Link to={"/formUser"}><Button color="danger" >Add User</Button>
                </Link>
              </InputGroup></Col></Row>
          <Form>
            <hr />
            <FormGroup row>
              <Col sm={11}>
                <Input placeholder="Enter name to search for Role" required />
              </Col>
              <Button color="primary">Search</Button>
            </FormGroup>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </Input>
            </FormGroup>
          </Form>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><Link to={"/tabUser"}>Mark</Link></td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td><Link to={"/tabUser"}>Ovune</Link></td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>Active</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
