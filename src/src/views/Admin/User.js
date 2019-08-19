import React from "react";
import { Button } from "reactstrap";
import {Link } from 'react-router-dom';
import '../setting/style.css';
const Example = props => {
  return (
    <div class="settings">

        <div class="list-group">
          <ul>
          <li class="lead"> Name: &nbsp; Max </li>
          <li class="lead"> Email: &nbsp; xxyyyy@gmail.com </li>
          <li class="lead"> ID: &nbsp;  XXXX-YYY-WWW</li>
          <li class="lead"> Phone: &nbsp; 91 9870718085</li>
          <li class="lead"> Mobile: &nbsp;  919870718085</li>
          <li class="lead"> Type: &nbsp;  Sub-Admin</li>
          <li class="lead"> Validity: &nbsp;  31-09-2019</li>
          <li class="lead"> City: &nbsp;  hoshiarpur</li>
          <li class="lead"> State: &nbsp;  punjab</li>
          <li class="lead"> Country: &nbsp; India</li>
          </ul>
          <div class="text-center">

          <Link to={'/add-users'}><Button class="display-2" color="secondary" size="lg">Back</Button></Link>{'    '}
        <Button class="display-2" color="success" size="lg">Edit</Button>

      </div>

        </div>
        <br/> <br/>
    </div>
  );
};

export default Example;
