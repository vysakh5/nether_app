import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import NewsItems from './newsItems';
import { getNews } from '../data/ApiCalls';

export default function News() {
  const [state, setstate] = useState([]);
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    msg: '',
  });
  const [searchParams, setParam] = useState({});

  const handleChange = (e) =>
    setParam({ ...searchParams, [e.target.name]: e.target.value });

  const getData = async (searchQuery) => {
    let searchData = {};

    if (searchQuery) {
      searchData = { ...searchParams, ...{ searchText: searchQuery } };
    } else {
      searchData = searchParams;
    }
    let response = await getNews(searchData);
    console.log(response);

    if (response.status === 'ok') {
      setstate(response.articles);
      setStatus({ loading: false });
    } else {
      setStatus({ loading: false, error: true, msg: response.msg });
    }
  };

  useEffect(() => {
    getData();
  }, [searchParams.lang, searchParams.sort]);

  const NewsList = () => {
    if (status.loading) {
      return <div className='news-item ml-2 mt-3 text-center'>Loading..</div>;
    } else if (status.error) {
      return (
        <div className='news-item ml-2 mt-3 text-center'>
          Opps Somthing went wrong -{status.msg}
        </div>
      );
    } else if (state.length === 0) {
      return (
        <div className='news-item ml-2 mt-3 text-center'>Nothing Found</div>
      );
    } else {
      return (
        <div>
          {state.map((item) => {
            return <NewsItems newsItem={item} />;
          })}
        </div>
      );
    }
  };

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
                  name='searchText'
                  onChange={handleChange}
                />
                <label for='search_text' className='form-label'>
                  Search News
                </label>

                <button
                  className='serch-btn'
                  onClick={() => getData(searchParams.searchText)}
                >
                  {' '}
                  <i className='fas fa-search'></i>
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
              <select
                onChange={handleChange}
                name='lang'
                id='lang'
                className='lang-select'
              >
                <option value=''>Language</option>
                <option value='ml'>Malayalam</option>
                <option value='en'>English</option>
                <option value='hi'>Hindi</option>
              </select>

              <select
                onChange={handleChange}
                name='sort'
                id='sort'
                className='lang-select'
              >
                <option value=''>Sort</option>
                <option value='publishedAt'>Newest</option>
                <option value='popularity'>Popularity</option>
              </select>
            </Col>
          </Row>
        </div>
        <NewsList />
      </div>
    </>
  );
}
