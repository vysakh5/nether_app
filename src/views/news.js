import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import NewsItems from './newsItems';

export default function news() {
  return (
    <>
      <div className='card card-n'>
        <div className='news-item ml-2'>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Search News'
                  className='search-box'
                  name='search_text'
                />
                <label for='search_text' className='form-label'>
                  Search News
                </label>

                <button className='serch-btn'>
                  {' '}
                  <i class='fas fa-search'></i>
                </button>
              </div>
            </Col>
            {/* <Col lg='3' sm='1'>
              <button> Se</button>
            </Col> */}
            <Col
              lg='6'
              md='6'
              sm='12'
              className='d-lg-flex justify-content-end'
            >
              <select name='lang' id='lang' className='lang-select'>
                <option value=''>Language</option>
                <option value='ml'>Malayalam</option>
                <option value='en'>English</option>
                <option value='hi'>Hindi</option>
              </select>

              <select name='lang' id='lang' className='lang-select'>
                <option value=''>Sort</option>
                <option value='ml'>Newest</option>
                <option value='en'>Oldest</option>
              </select>
            </Col>
          </Row>
        </div>
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
        <NewsItems />
      </div>
    </>
  );
}
