
import React, { Component } from "react";

import {
  t1, t2, t3, t4, t5,
  t6,
} from '../../../assets';

import {
  Input,
  Btn,
  Col, Row, Container,
  VerticalContent,
  Card, Img
} from "../../../components";

import { Layout } from "../../../containers";

import '../../../master/main.css';
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
            <Card
            head='I said the words here'
            // img='true'
          >
            Lorem ipsom dolar set amit
            <Row><Btn>Click</Btn></Row>
          </Card>

          <Row>
            <h4>Toys</h4>
          </Row>

            <Row>
              <Col size='l3'>
                <VerticalContent
                  src={t6}
                  alt='#'
                  sellerRating='5 stars'
                  toyRating='4.5 stars'

                >Words here
            </VerticalContent>
              </Col>

              <Col size='l3'>
                <VerticalContent
                  src={t4}
                  alt='#'
                  sellerRating='5 stars'
                  toyRating='4.5 stars'

                >Words here
            </VerticalContent>
              </Col>

              <Col size='l3'>
                <VerticalContent
                  src={t5}
                  alt='#'
                  sellerRating='5 stars'
                  toyRating='4.5 stars'

                >Words here
            </VerticalContent>
              </Col>

              <Col size='l3'>
                <VerticalContent
                  src={t5}
                  alt='#'
                  sellerRating='5 stars'
                  toyRating='4.5 stars'

                >Words here
            </VerticalContent>
              </Col>
            </Row>

 <div className='occupy-entire-space'>
          <Row>           
            <Col size='l3'>
              <Card
              picture='true'
              src={t3} 
              alt='#'
              >             
              
                I am selling you this fire truck !!
              </Card>
            </Col>  
            <Col size='l3'>
              <Card
              picture='true'
              src={t1} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t2} 
              alt='#'
              >             
              
                I am selling you this cube !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t4} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
            
          </Row>
          </div>



 <Row>
            <Col size='l3'>
              <Card
              picture='true'
              src={t3} 
              alt='#'
              >             
              
                I am selling you this fire truck !!
              </Card>
            </Col>  
            <Col size='l3'>
              <Card
              picture='true'
              src={t1} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t2} 
              alt='#'
              >             
              
                I am selling you this cube !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t4} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
          </Row>


           <Row>
            <Col size='l3'>
              <Card
              picture='true'
              src={t3} 
              alt='#'
              >             
              
                I am selling you this fire truck !!
              </Card>
            </Col>  
            <Col size='l3'>
              <Card
              picture='true'
              src={t1} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t2} 
              alt='#'
              >             
              
                I am selling you this cube !!
              </Card>
            </Col> 
            <Col size='l3'>
              <Card
              picture='true'
              src={t4} 
              alt='#'
              >             
              
                I am selling you this brand new car !!
              </Card>
            </Col> 
          </Row>



          </Container>

          
        </Layout>
      </div>
    );
  }
}

export default Test;