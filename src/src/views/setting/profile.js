import React from "react";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import './style.css';
const Example = props => {
  return (
    <div class="settings container">

        <div class="list-group">
          <ul>
          <li class="lead"> First Name: &nbsp; jack </li>
          <li class="lead"> Last Name: &nbsp; max </li>
          <li class="lead"> Email: &nbsp; contact@agmail.com </li>

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
