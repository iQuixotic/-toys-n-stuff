
import React, { Component } from "react";

// import components
import {
    Col, Container, Row,
    Btn, Form, Input
} from "../../../components";

// import containers
import {
    Layout
} from "../../../containers";

import '../../../master/main.css';
import './style.css';

class Contact extends Component {
    state = {
        inputVal: '',
        selectedField: this.props.id,
        shouldSubmit: false,
    }


    selectFieldHandler = () => {
        console.log({ [this.state.selectedField]: this.state.inputVal })
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
            <div className='Contact'>
                <Layout>
                    <Container>
                        <Form>
                            <Container>
                            <Row>
                                <Col size='l6 s12'>
                                    <Input label='First Name' />
                                </Col>
                                <Col size='l6 s12'>
                                    <Input label='Last Name' />
                                </Col>
                            </Row>
                            <Row>
                                <Col size='l7 s12'>
                                    <Input label='Email' />
                                </Col>
                                <Col size='l5 s12'>
                                    <Input label='Phone' />
                                </Col>
                            </Row>
                            <Row>
                                <Col size='l5 s12'>
                                    <Input label='Adress' />
                                </Col>
                                <Col size='l5 s9'>
                                    <Input label='City' />
                                </Col>
                                <Col size='l2 s3'>
                                    <Input label='State' />
                                </Col>
                            </Row>
                            <Row>
                                <Col size='l6 s12'>
                                    <Input label='Password' />
                                </Col>
                                <Col size='l6 s12'>
                                    <Input label='Confirm Password' />
                                </Col>
                            </Row>

                            <div className='buttons-row reg-btns'>
                                <Row>
                                    <Btn onClick={this.formSubmitHandler}>Submit</Btn>
                                    <Btn>Register</Btn>
                                </Row>
                            </div>
                            </Container>
                        </Form>
                    </Container>
                </Layout>
            </div>
        );
    }
}

export default Contact;