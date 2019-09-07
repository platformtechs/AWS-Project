import React, {Component} from 'react';
import {Spinner} from 'reactstrap';
import {authToken, userInfo, userType} from '../../../api';

export default class LogOut extends Component {
    componentDidMount(){
        this.Logout()
    }

    Logout = async () => {
       try {
         console.log("logout")
         await localStorage.removeItem(authToken);
         await localStorage.removeItem(userInfo);
         await localStorage.removeItem(userType);
         this.props.history.push('/login')
       } catch (error) {
         console.log("err", error)
         alert("error")
       }
    }

    render(){
        return(
            <div className="app flex-row align-items-center justify-content-center">
              <Spinner
                style={{ width: "5rem", height: "5rem" }}
                color="primary"
              />
            </div>
        )
    }
}