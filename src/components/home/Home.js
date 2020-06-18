import React, { useRef, useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import { useDispatch, useSelector } from 'react-redux';
import useOpac from '..//utilis/opac';
import { fetchCall } from '../../redux/fetchCall/fetch-actions';
import { getCoords, getCity } from '../utilis/getCoords';
import getBack from '../utilis/backgrounds';

import './home.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sticky from '../sticky/Sticky';
import Body from '../body/Body';
import Spinner from '../spinner/Spinner';

import { get } from 'lodash';

import bClear from '../../img/sunny.png';
import bDrizzle from '../../img/drizzle.gif';
import bClouds from '../../img/clouds.gif';
import bThunderstorm from '../../img/thundestrorm.gif';
import bRain from '../../img/rain.gif';
import bSnow from '../../img/snow.gif';
import bHaze from '../../img/haze.gif';
import nClear from '../../img/clear-night.gif';
import nCloudy from '../../img/cloudy-night.gif';
import nDrizzle from '../../img/rainy-night.gif';
import nRainy from '../../img/drizzle-night.gif';
import nStormy from '../../img/stormy-night.gif';
import nHaze from '../../img/night-haze.gif';
import Polar from '../../img/polar.jfif';

const Home = () => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const ref = useRef();
  const opac = useOpac(ref);
  const { latitude: lat, longitude: lon } = usePosition();

  const citySet = useSelector(state => state.city.city);
  const data = useSelector(state => state.data.data);
  const dt = get(data, ['current', 'dt']);
  const sunrise = get(data, ['current', 'sunrise']);
  const sunset = get(data, ['current', 'sunset']);
  const weather = get(data, ['current', 'weather']);

  let condition;
  if (weather && weather[0]) {
    condition = weather[0].main;
  }

  const background = getBack(condition, dt, sunrise, sunset);

  console.log(sunrise);

  let back;
  if (background === 'sunny') {
    back = bClear;
  } else if (background === 'drizzle') {
    back = bDrizzle;
  } else if (background === 'clouds') {
    back = bClouds;
  } else if (background === 'rain') {
    back = bRain;
  } else if (background === 'snow') {
    back = bSnow;
  } else if (background === 'thundestrorm') {
    back = bThunderstorm;
  } else if (background === 'clear-night') {
    back = nClear;
  } else if (background === 'drizzle-night') {
    back = nDrizzle;
  } else if (background === 'cloudy-night') {
    back = nCloudy;
  } else if (background === 'rainy-night') {
    back = nRainy;
  } else if (background === 'stormy-night') {
    back = nStormy;
  } else if (background === 'haze') {
    back = bHaze;
  } else if (background === 'haze-night') {
    back = nHaze;
  } else if (background === 'no-sunrise') {
    back = Polar;
  }
  console.log(back);

  useEffect(() => {
    const res = getCoords(lat, lon);
    res.then(el => {
      if (el && el.city) {
        setCity(el.city);
      }
    });
  }, [lat, lon]);

  useEffect(() => {
    if (!citySet) {
      dispatch(fetchCall(lat, lon));
    }
  }, [lat, lon, dispatch, citySet]);

  useEffect(() => {
    if (citySet) {
      const d = async () => {
        const res = await getCity(citySet);
        if (res && res.latLng) {
          dispatch(fetchCall(res.latLng.lat, res.latLng.lng));
          setCity(citySet);
        }
      };
      d();
    }
  }, [citySet, dispatch]);

  return (
    <div className="container" style={{ backgroundImage: `url(${back})` }}>
      <div className="container1" style={{ backgroundImage: `url(${back})` }}>
        {city ? <Header opac={opac} city={city} /> : <Spinner />}
      </div>
      <Sticky opac={opac} background={back} />

      <div ref={ref}>
        <Body background={back} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
