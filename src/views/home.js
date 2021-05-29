import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Weather from './weather';
import News from './news';
export default function home() {
  return (
    <div>
      {/* Nav Bar section */}
      <Navbar
        expand='lg'
        variant='dark'
        bg='dark'
        className='justify-content-center'
      >
        <Navbar.Brand href='#'>NETHER</Navbar.Brand>
      </Navbar>

      {/* Nav Bar section END */}

      {/* Main Content */}
      <Container className='mt-2'>
        <Row>
          <Col
            lg='4'
            md='12'
            className='main-box d-flex align-items-center justify-content-center'
          >
            <Weather />
          </Col>
          <Col
            lg='8'
            md='12'
            className='main-box d-flex align-items-center justify-content-center'
          >
            {' '}
            <News />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
