import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsItems from './newsItems';

export default function news() {
  return (
    <>
      <div className='card card-n'>
        <div>Search</div>
        <NewsItems />
      </div>
    </>
  );
}
