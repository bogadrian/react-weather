import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

import './header.scss';
import { get } from 'lodash';

const Header = ({ opac, city }) => {
  const dataHeader = useSelector(state => state.data.data);

  const main = get(dataHeader, ['current', 'weather']);
  const temp = get(dataHeader, ['current', 'temp']);

  const unixTimestamp = get(dataHeader, ['current', 'dt']);
  const timezone = get(dataHeader, ['timezone']);

  let continent;
  if (timezone) {
    continent = timezone.split('/')[0].substring(0, 2);
  }

  const celsius = temp - 273.15;
  let conditions, icon;
  if (main && main[0]) {
    conditions = main[0].main;
    icon = main[0].icon;
  }

  return (
    <div className="header">
      <div className="header1">
        <div style={{ display: 'flex' }}>
          <span
            style={{ fontSize: '3rem', fontWeight: '400', marginRight: '1rem' }}
          >
            {city}{' '}
          </span>{' '}
          /
          <span style={{ color: 'red', fontSize: '3rem', fontWeight: '400' }}>
            {continent}
          </span>
        </div>
        <div className="cond-timezone">
          <h4 className="header--h4">{conditions}</h4>
          <div>
            <img
              style={{ height: '40px', marginTop: '10px' }}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="alt"
            />
          </div>
          <span>
            <Moment
              unix
              format="H:ss"
              tz={timezone}
              style={{ fontSize: '2rem' }}
            >
              {unixTimestamp}
            </Moment>
          </span>
        </div>
        <h2 style={{ opacity: `${opac}` }} className="header--h2">
          {celsius.toFixed()} &#xb0;
        </h2>
      </div>
    </div>
  );
};

export default Header;