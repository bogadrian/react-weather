import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import './week.scss';
import { get } from 'lodash';

const WeekList = ({ data, back }) => {
  const celsius = data.temp.day - 273.15;
  const unixTimestamp = get(data, ['dt']);
  const timezone = get(data, ['timezone']);

  return (
    <div className="week-el" style={{ backgroundImage: `url(${back})` }}>
      <span>
        <Moment
          unix
          format="ddd D/M"
          tz={timezone}
          style={{ fontSize: '2rem' }}
        >
          {unixTimestamp}
        </Moment>
      </span>
      <span>
        <img
          style={{ height: '40px', marginTop: '10px' }}
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="alt"
        />
      </span>
      <span>{celsius.toFixed()} &#xb0;</span>
    </div>
  );
};

export default WeekList;
