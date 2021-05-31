import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// let newsItem = {
//   source: {
//     id: null,
//     name: 'Twentyfournews.com',
//   },
//   author: '24 Web Desk',
//   title:
//     'Arrested Black Marketing Oxygen ഓക്സിജൻ കോൺസൺട്രേറ്ററുകൾ കരിഞ്ചന്തയിൽ വിറ്റു; ഡൽഹിയിൽ 4 പേർ അറസ്റ്റിൽ',
//   description:
//     'Arrested Black Marketing Oxygen രാജ്യതലസ്ഥാനത്ത് ഓക്സിജൻ ക്ഷാമം രൂക്ഷമാകുന്ന സാഹചര്യത്തിലും കരിഞ്ചന്തയിൽ ഓക്സിജൻ കോൺസൺട്രേറ്ററുകളുടെ വില്പന തുടരുന്നു. ഓക്സിജൻ കോൺസൺട്രേറ്ററുകൾ arrest, new delhi, Oxygen',
//   url:
//     'https://www.twentyfournews.com/2021/05/05/4-arrested-for-black-marketing-of-oxygen-concentrators.html',
//   urlToImage:
//     'https://www.twentyfournews.com/wp-content/uploads/2021/05/Untitled-2021-05-05T225250.570.jpg',
//   publishedAt: '2021-05-05T19:54:47Z',
//   content:
//     'Twentyfournews.com ,a news portal from the house of Insight Media City.The portal stands among the very few non biased news portals from the state of kerala.',
// };

export default function NewsItems(props) {
  const newsItem = props.newsItem;
  const [state, toggleState] = useState(false);

  const NewsDisc = () => {
    if (state) {
      return (
        <>
          <p className='text-justify'>{newsItem.description}</p>
          <a className='links' href={newsItem.url}>
            Read Full News at {newsItem.source.name}
          </a>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div className='news-item m-2 '>
        <Row>
          <Col lg='4' md='12'>
            <img src={newsItem.urlToImage} className='news-imgbox' />
          </Col>
          <Col lg='8' md='12'>
            <Row>
              <Col className='text-justify mt-2'>
                <strong>{newsItem.title}</strong>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col sm='6' md='4'>
                <i className='fas fa-user'></i>
                <strong> {newsItem.author}</strong>
              </Col>
              <Col sm='6' md='4'>
                <i className='fas fa-calendar'></i>
                <strong> 29/05/2021</strong>
              </Col>
              <Col sm='12' md='4'>
                <Button
                  variant='link'
                  className='pt-0 links'
                  onClick={() => toggleState(!state)}
                >
                  {state ? 'Read less' : 'Read more '}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <NewsDisc />
          </Col>
        </Row>
      </div>
    </>
  );
}
