import React from 'react';

import Moment from 'react-moment';
import 'moment-timezone';

import './hour.scss';
import './sticky.scss';
import { get } from 'lodash';

const ScrollList = ({ hour }) => {
  const unixTimestamp = get(hour, ['dt']);
  const temp = get(hour, ['temp']);
  const celsius = temp - 273.15;
  const timezone = get(hour, ['timezone']);

  return (
    <div className="hour-el">
      <div className="hour">
        <Moment
          unix
          format="HH:MM"
          tz={timezone}
          style={{ fontSize: '1.5rem', fontWeight: '400', marginTop: 0 }}
        >
          {unixTimestamp}
        </Moment>
      </div>
      <div className="hour-icon">
        <img
          style={{ height: '40px', marginTop: '10px' }}
          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
          alt="alt"
        />
      </div>
      <div className="hour-temperature">{celsius.toFixed()} &#xb0;</div>
    </div>
  );
};

export default ScrollList;
