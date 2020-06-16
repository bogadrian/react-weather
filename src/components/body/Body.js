import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

import Week from '../weeks/Week';

import './body.scss';
import { get } from 'lodash';

const Body = ({ back }) => {
  const data = useSelector(state => state.data.data);

  const clouds = get(data, ['current', 'clouds']);
  const feelsLike = get(data, ['current', 'feels_like']);

  const celsius = feelsLike - 273.15;
  const humidity = get(data, ['current', 'humidity']);
  const pressure = get(data, ['current', 'pressure']);
  const windSpeed = get(data, ['current', 'wind_speed']);
  const uvi = get(data, ['current', 'uvi']);
  const unixTimestamp = get(data, ['current', 'sunset']);
  const unixTimestampRes = get(data, ['current', 'sunrise']);
  const timezone = get(data, ['current', 'timezone']);

  return (
    <Fragment>
      <div className="sticky-div2">
        <Week background={back} />
        <div
          className="sun-container"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div
            className="element-body-sun"
            style={{ backgroundImage: `url(${back})` }}
          >
            <div>
              <span>Sunset</span>
            </div>
            <div>
              <Moment unix format="H:ss" tz={timezone}>
                {unixTimestamp}
              </Moment>
            </div>
          </div>
          <div
            className="element-body-sun"
            style={{ backgroundImage: `url(${back})` }}
          >
            <div>
              <span>Sunrise</span>
            </div>
            <div>
              <Moment unix format="H:ss" tz={timezone}>
                {unixTimestampRes}
              </Moment>
            </div>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>Clouds</span>
          </div>
          <div>
            <span>{clouds} &#37;</span>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>Feels Like </span>
          </div>
          <div>
            <span>{celsius.toFixed()} &#xb0;</span>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>Humidity</span>
          </div>
          <div>
            <span>{humidity} &#37;</span>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>Pressure</span>
          </div>
          <div>
            <span>{pressure} hPa</span>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>Wind Speed</span>
          </div>
          <div>
            <span>{windSpeed} m/s</span>
          </div>
        </div>
        <div
          className="element-body"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div>
            <span>UVI</span>
          </div>
          <div>
            <span>{uvi} UV-index</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
