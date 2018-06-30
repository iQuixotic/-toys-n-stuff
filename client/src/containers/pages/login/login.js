
import React, { Component } from "react";

// import components
import { 
         Container, Row, 
         Btn, Form, Input,
 } from "../../../components";

// import containers
import {
         Layout
} from "../../../containers";

import '../../../master/main.css';
import './style.css';


class Login extends Component {
  state = {
    inputVal: '',
    selectedField: this.props.id,
    shouldSubmit: false,
  }


selectFieldHandler = () => {
    console.log({[this.state.selectedField]: this.state.inputVal})
}

inputChangeHandler = event => {
    this.setState({ 
        inputVal: (event.target.value),
    })
    let data = {
        [this.state.selectedField]: this.state.inputVal
    }
    console.log(data)
}

  formSubmitHandler = () => {
    console.log('hello world')
  }
 
  render() {
    return (
      <div className='Login'>
      <Layout>
        <Container>
            <Form>
              <Input label='Username'/>
              <Input label='Password'/>
              <div className='buttons-row login-btns'> 
                <Row>
                  <Btn onClick={this.formSubmitHandler}>Submit</Btn>
                  <Btn>Register</Btn>
                </Row>
              </div>
            </Form>          
        </Container>
      </Layout>

      </div>
    );
  }
}

export default Login;

