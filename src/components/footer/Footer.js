import React from 'react';
import { Link } from 'react-router-dom';
import Plus from '../../img/plus.svg';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-el">
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          to="/location"
        >
          <h3
            style={{ fontSize: '2rem', marginRight: '1rem', cursor: 'pointer' }}
          >
            New Location
          </h3>

          <img
            src={Plus}
            alt="alt"
            style={{
              height: '3rem',
              cursor: 'pointer',
              marginRight: '3rem',
              color: 'blue'
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
