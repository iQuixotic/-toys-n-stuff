
import React, { Component } from "react";
import { Form } from "../../../components";

class Login extends Component {
  formSubmitHandler = () => {
    console.log('hello world')
  }
 
  render() {
    return (
      <div id='login-page'>
        <Form cn='login'/>
      </div>
    );
  }
}

export default Login;

