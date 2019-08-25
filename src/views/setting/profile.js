import React, {Component} from "react";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import './style.css';
// import {Auth} from 'aws-amplify';
// import {CognitoIdentity, IAM} from 'aws-sdk';



export default class Example extends Component {
  componentDidMount(){
    // Auth.currentCredentials()
    // .then(credentials => {
    //   console.log("credentials", credentials)
    //   const iAm = new IAM({
    //     apiVersion: '2010-05-08',
    //     credentials: Auth.essentialCredentials(credentials)
    //   })
    //   let params ={}
    //   iAm.listUserPools(params, (err, data)=>{
    //        if (err) return console.log("error", err);
    //        else console.log("data", data);
    //   })
    // }).catch(err=> console.log("err", err))
  }
  render(){
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
  }
};
