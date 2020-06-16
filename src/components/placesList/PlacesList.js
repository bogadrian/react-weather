import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './placesList.scss';

import { setCity } from '../../redux/setCity/setCity-actions';
import Delete from '../../img/delete.svg';

const PlacesList = () => {
  const cities = JSON.parse(localStorage.getItem('city'));
  const dispatch = useDispatch();
  const history = useHistory();

  const [cit, setCit] = useState([]);

  const handleDelete = index => {
    if (cities.length > 0) {
      const c = cities.filter((city, i) => i !== index);

      localStorage.setItem('city', JSON.stringify(c));
      setCit(c);
    }
  };

  const handleCity = city => {
    dispatch(setCity(city));
    history.push('/');
  };
  return (
    <div style={{ marginTop: '3rem' }}>
      {cities &&
        cities.map((city, index) => (
          <div className="city-div" key={index}>
            <div className="city-name" onClick={handleCity.bind(null, city)}>
              {city}
            </div>

            <div
              className="img-delete"
              onClick={handleDelete.bind(null, index)}
            >
              <img src={Delete} alt="delete" style={{ height: '2rem' }} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlacesList;
