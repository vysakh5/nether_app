import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import NewsItems from './newsItems';
import { getNews } from '../data/ApiCalls';

export default function News() {
  let initialStatus = {
    loading: true,
    error: false,
    msg: '',
  };

  //Hooks initials
  const [state, setstate] = useState([]); //For News List
  const [status, setStatus] = useState(initialStatus); // For Status checking and error management
  const [searchParams, setParam] = useState({}); // For Search parameters such as search text, sort, lang.

  useEffect(() => {
    getData();
  }, [searchParams.lang, searchParams.sort]); // Fetch the news from server when language or sort changed

  //handle function for search text lanuage, sort
  const handleChange = (e) =>
    setParam({ ...searchParams, [e.target.name]: e.target.value });

  // Fetching data from server
  const getData = async (searchQuery) => {
    let searchData = {};
    // compaining Search text and other params
    if (searchQuery) {
      searchData = { ...searchParams, ...{ searchText: searchQuery } };
    } else {
      searchData = searchParams;
    }
    // Geting data from server
    let response = await getNews(searchData);

    // For Error Management
    if (response.status === 'ok') {
      setstate(response.articles);
      setStatus({ loading: false });
    } else {
      setStatus({ loading: false, error: true, msg: response.msg });
    }
  };

  //News List and error management
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
            {/* Card for search and sort and language   */}
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
                <option value='ta'>Tamil</option>
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
