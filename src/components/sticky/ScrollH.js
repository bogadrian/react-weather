import React from 'react';
import { useSelector } from 'react-redux';

import './sticky.scss';
import { get } from 'lodash';

import ScrollList from './ScrollList';

const ScrollH = () => {
  const data = useSelector(state => state.data.data);

  const hour = get(data, ['hourly']);

  return (
    <div className="hour-container">
      {hour &&
        hour
          .slice(0, 23)
          .map((el, index) => <ScrollList key={index} hour={el} />)}
    </div>
  );
};

export default ScrollH;
