import React from "react";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";

import './style.css';
const Example = props => {
  return (
    <div class="settings">

        <div class="list-group">
          <ul>
          <li class="lead"> Site Title: &nbsp; xxxyyy </li>
          <li class="lead"> Domain Name: &nbsp; www.xxxxyyyy.com </li>
          <li class="lead"> Contact Email: &nbsp; contact@gmail.com </li>
          <li class="lead"> Contact Phone: &nbsp; +91 9870718085 </li>
          <li class="lead"> Copyright Text: &nbsp; copyrights© 2019.All rights reserved.</li>
          <li class="lead"> Facebook URL: &nbsp; https: &nbsp; //www.facebook.com/welcome</li>
          <li class="lead">Twitter URL:</li>
          <li class="lead"> GooglePlus URL:</li>
          <li class="lead"> LinkedIn URL:</li>
          <li class="lead"> Pinterest URL: &nbsp; </li>
          <li class="lead"> YouTube URL: &nbsp; </li>
          <li class="lead"> Custom Head Tags: &nbsp; XXXXXXXX </li>
          <li class="lead"> Default Meta Tags: &nbsp; XXXXXXXX </li>
           <li class="lead"> Custom CSS: &nbsp; XXXXXXXX </li>
          <li class="lead"> Google Analytics Tracking ID: &nbsp; XXXXXXXX </li>
          </ul>

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
