import React, { Component } from 'react';
import { Button, Table,Row, InputGroup, Col, Container, Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
export default class Query extends Component {
  render() {
    return (
      <div className="container" style={{backgroundColor:'white',padding:20,marginBottom:20}}>
        <Container>

<Row><Col sm="4"></Col>
<Col sm="8">
          <InputGroup>
            <h3 >Click on "Add New User" to Add new user</h3>{' '}

              <Link to={"/form"}><Button color="danger" style={{marginLeft:20}} >Add New User</Button>
</Link>
          </InputGroup></Col></Row>
          <Form>
            <hr />
            <FormGroup row>
              <Col sm={11}>
                <Input placeholder="Enter name to search for User" required/>
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
                <th>Email</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><Link to={"/user"}>Mark</Link></td>
                <td>MArk@csd</td>
                <td>Pending</td>
                <td><i className="icon-pin"></i></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td><Link to={"/user"}>Ovune</Link></td>
                <td>Thornton@dsf</td>
                <td>Pending</td>
                <td><i className="icon-pin"></i></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td><Link to={"/user"}>Throfh</Link></td>
                <td>Actds@dsg</td>
                <td>Pending</td>
                <td><i className="icon-pin"></i></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td><Link to={"/user"}>Throfh</Link></td>
                <td>Actds@dsg</td>
                <td>Pending</td>
                <td><i className="icon-pin"></i></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td><Link to={"/user"}>Throfh</Link></td>
                <td>Actds@dsg</td>
                <td>Pending</td>
                <td><i className="icon-pin"></i></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
