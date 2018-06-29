
import React, { Component } from "react";
import {
  Input,
  Col, Row, Container,
} from "../../../components";
import { Layout } from "../../../containers";

import './test.css';


class Test extends Component {
  formSubmitHandler = () => {
    console.log('hello world')
  }

  render() {
    return (
      <div>
        <Layout>
          <Container>
            <Row> Row 1 </Row>
            <Row> Row 2 </Row>
            <Row>
              <Col size='l7'>
                Row 3 Col 1
                    </Col>
              <Col size='l5'>
                Row 3 Col 2
                    </Col>
            </Row>
            <Row>
              hello
                </Row>
            <Input label='Email' itype='input' placeholder='john@twoBigTrees.com' type='email' />
            <Input label='Password' itype='input' type='password' />
            <button onClick={this.formSubmitHandler}> Click Me </button>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Test;