import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import './sticky.scss';
import { get } from 'lodash';

import ScrollH from './ScrollH';

const Sticky = ({ opac }) => {
  const data = useSelector(state => state.data.data);

  const unixTimestamp = get(data, ['current', 'dt']);
  const timezone = get(data, ['cuurent', 'timezone']);
  return (
    <div className="sticky-div1">
      <div className="sticky-div-h1">
        <h1 style={{ opacity: `${opac}` }}>
          <Moment
            unix
            format="dddd MMMM YYYY"
            tz={timezone}
            style={{ fontSize: '3rem', fontWeight: '200' }}
          >
            {unixTimestamp}
          </Moment>
        </h1>
      </div>
      <ScrollH />
    </div>
  );
};

export default Sticky;
