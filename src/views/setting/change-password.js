import React from "react";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";

import './style.css';
const Example = props => {
  return (
    <div class="settings container">

        <div class="list-group">
          <ul>
          <li class="lead"> Login ID: &nbsp; XYZABC </li>
          <li class="lead"> Password: &nbsp; XXXXXXXXX </li>
          {/* <li class="lead"> New Password: &nbsp; XXXXXXXXXX </li> */}

          </ul><br/><br/>
          <div class="text-center">

          <Link to={'/dashboard'}><Button class="display-2" color="secondary" size="lg">Back</Button></Link>{'    '}
        <Button class="display-2" color="success" size="lg">Edit</Button>

      </div>


        </div>
        <br/> <br/>
    </div>
  );
};

export default Example;
