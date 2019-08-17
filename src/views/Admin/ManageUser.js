import React, { Component } from 'react';
import { Button, Table, Col, Container, Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import { IAM } from 'aws-sdk';
import { Auth } from 'aws-amplify';



export default class Query extends Component {

  componentDidMount(){
    Auth.currentCredentials()
    .then(credentials => {
      console.log("credentials", credentials)
      const iAm = new IAM({
        apiVersion: '2010-05-08',
        credentials: Auth.essentialCredentials(credentials)
      })
      let params ={}
      iAm.listUsers(params, (err, data)=>{
           if (err) return console.log("error", err);
           else console.log("data", data)
      })
    }).catch(err=> console.log("err", err))
  }

  render() {
    return (
      <div className="container" style={{backgroundColor:'white',padding:20,marginBottom:20}}>
        <Container>

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
                <th>Date Registed</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><Link to={"/tabUser"}>Mark</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td><Link to={"/tabUser"}>Ovune</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>

              <tr>
                <th scope="row">6</th>
                <td><Link to={"/tabUser"}>Mark</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td><Link to={"/tabUser"}>Ovune</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td><Link to={"/tabUser"}>Throfh</Link></td>
                <td>2012/01/01</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
            </tbody>
       </Table>
        </Container>
      </div>
    )
  }
}
