import React from 'react';
import { useSelector } from 'react-redux';
import './week.scss';
import { get } from 'lodash';
import WeekList from './WeelList';

const Week = ({ back }) => {
  const data = useSelector(state => state.data.data);

  const main = get(data, ['daily']);

  return (
    <div className="week-container" style={{ backgroundImage: `url(${back})` }}>
      {main &&
        main.map((el, index) => <WeekList key={index} data={el} back={back} />)}
    </div>
  );
};

export default Week;
