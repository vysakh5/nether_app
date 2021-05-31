import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getWeather } from '../data/ApiCalls';

export default function Weather() {
  //Hooks initials
  let initialState = { loading: true };
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    setstate(getData());
  }, []);

  // Featching data
  const getData = async () => {
    let response = await getWeather();
    console.log(response);

    if (response) {
      setstate({ ...response, ...{ loading: false } });
    }
  };

  // Error management and result
  const LoadedScreen = () => {
    //For Loading time
    if (state.loading) {
      return <div className='news-item'> Loading ..</div>;
    } else if (state.error) {
      //For Error Screen
      return (
        <div className='news-item'>
          <p> Error : {state.msg}</p>
        </div>
      );
    } else {
      let weatherImg = '01d'; // default image for sun

      // For Weather condition code full details @ https://openweathermap.org/weather-conditions
      if (state.weather) {
        if (state.weather[0].id < 233 && state.weather[0].id > 199) {
          weatherImg = '11d';
        } else if (state.weather[0].id < 531 && state.weather[0].id > 499) {
          weatherImg = '10d';
        } else if (state.weather[0].id < 805 && state.weather[0].id > 800) {
          weatherImg = '02d';
        }
      }
      //Result
      return (
        <div className='weather-card'>
          <div className='card card-w'>
            <div>
              <Row className='weather-dcr'>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`}
                  alt=''
                  className='mt-3 ml-2'
                  height='50px'
                />
                <p className='mt-4 ml-4'>
                  {' '}
                  {state.weather ? state.weather[0].main : ''}
                </p>
              </Row>
              <Row>
                <div className='tem-text '>
                  {state.weather ? Math.trunc(state.main.temp) : ''}{' '}
                  {/* trunc becouse of the text is to big  */}
                </div>

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
                        <h1 className='box-head-1 '>
                          {state.main ? Math.trunc(state.main.feels_like) : ''}{' '}
                        </h1>
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
                      <h1 className='box-head-1 '>
                        {' '}
                        {state.wind ? state.wind.speed : ''}{' '}
                      </h1>
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
                        <h1 className='box-head-1 '>
                          {state.main ? Math.trunc(state.main.humidity) : ''}{' '}
                        </h1>
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
                      <h1 className='box-head-1 '>
                        {state.main ? Math.trunc(state.main.pressure) : ''}{' '}
                      </h1>
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
                  <i className='fas fa-map-marker-alt mr-2'></i>
                  {state.name}{' '}
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
