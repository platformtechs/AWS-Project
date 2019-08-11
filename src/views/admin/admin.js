import React, { Component } from 'react';
import AWS from 'aws-sdk'
export default class admin extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    var iam = new AWS.IAM();
    var params = {
      UserName: "Bob"
     };
     iam.createAccessKey(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data);           // successful response
       /*
       data = {
        AccessKey: {
         AccessKeyId: "AKIAIOSFODNN7EXAMPLE",
         CreateDate: <Date Representation>,
         SecretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
         Status: "Active",
         UserName: "Bob"
        }
       }
       */
     });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>LOGIN</button>
      </div>
    )
  }
}
