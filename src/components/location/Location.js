import React, { useState } from 'react';

import './location.scss';

import Search from '../../img/search.svg';
import { getCity } from '../utilis/getCoords';
import PlacesList from '../placesList/PlacesList';

const Location = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [cities, setCities] = useState();

  const handleChange = e => {
    setText(e.target.value);
  };
  const resetError = () => {
    setError('');
    setText('');
  };
  const handleClick = async text => {
    //dispatch text

    const coords = await getCity(text);

    if (!coords) {
      setError('Please provide a correct place name!');
    } else {
      let cityInLS = JSON.parse(localStorage.getItem('city'));

      if (cityInLS) {
        localStorage.setItem('city', []);
        cityInLS = [...cityInLS, text];
        localStorage.setItem('city', JSON.stringify(cityInLS));
        setCities(cityInLS);
        setText('');
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#0e53b7', height: '100vh' }}>
      <div className="location-container">
        {error && (
          <div className="error-container">
            <div>
              <div>{error}</div>
            </div>
            <div className="btn-error" onClick={resetError}>
              <div>OK</div>
            </div>
          </div>
        )}
        <PlacesList cities={cities} />
        <div className="input-box">
          <div className="input-div">
            <input
              type="text"
              placeholder="Location"
              className="input"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="search">
            <img
              src={Search}
              alt="alt"
              style={{ width: '100%', height: '100%', cursor: 'pointer' }}
              onClick={handleClick.bind(null, text)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
