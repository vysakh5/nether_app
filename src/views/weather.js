import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getWeather } from '../data/ApiCalls';

export default function Weather() {
  let initialState = { loading: true };
  const [state, setstate] = useState(initialState);

  const getData = async () => {
    let response = await getWeather();
    console.log(response);

    if (!response.error) {
      setstate({ ...response, ...{ loading: false } });
    }
  };

  useEffect(() => {
    setstate(getData());
  }, []);

  const LoadedScreen = () => {
    if (state.loading) {
      return <div> Loading </div>;
    } else {
      return (
        <div className='weather-card'>
          <div className='card card-w'>
            <div>
              <Row className='weather-dcr'>
                <img
                  src='https://ifttt.com/images/channels/weather_lrg.png'
                  alt=''
                  className=''
                  height='50px'
                />
                <p className='mt-4 ml-4'> {state.cod}</p>
              </Row>
              <Row>
                <div className='tem-text '>26</div>

                <p className='sup'>°C</p>
              </Row>
            </div>
            <div className='detals-grid'>
              <Row>
                <Col>
                  <div className='weather-box-sm '>
                    <Row className='box-sub-title-1'>
                      <Col className='text-center'>Feels like</Col>
                    </Row>
                    <Row>
                      <Col className='text-center'>
                        <h1 className='box-head-1 '>15</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='text-center unit'>°C</Col>
                    </Row>
                  </div>
                </Col>
                <div className='weather-box-sm '>
                  <Row className='box-sub-title-1'>
                    <Col className='text-center'>Wind Speed</Col>
                  </Row>
                  <Row>
                    <Col className='text-center'>
                      <h1 className='box-head-1 '>15</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='text-center unit'>km/h</Col>
                  </Row>
                </div>
              </Row>
              <Row>
                <Col>
                  <div className='weather-box-sm '>
                    <Row className='box-sub-title-1'>
                      <Col className='text-center'>Humidity</Col>
                    </Row>
                    <Row>
                      <Col className='text-center'>
                        <h1 className='box-head-1 '>65</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='text-center unit'>%</Col>
                    </Row>
                  </div>
                </Col>
                <div className='weather-box-sm '>
                  <Row className='box-sub-title-1'>
                    <Col className='text-center'>Pressure</Col>
                  </Row>
                  <Row>
                    <Col className='text-center'>
                      <h1 className='box-head-1 '>1521</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='text-center unit'>hpa</Col>
                  </Row>
                </div>
              </Row>
            </div>
            <div>
              <Row>
                <Col className='text-center mt-1 location-text'>
                  {' '}
                  <i className='fas fa-map-marker-alt mr-2'></i> Kodungaloor{' '}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <LoadedScreen />
    </div>
  );
}
