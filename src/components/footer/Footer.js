import React from 'react';
import { Link } from 'react-router-dom';
import Plus from '../../img/plus.svg';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div
          style={{
            marginRight: '10px'
          }}
        >
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/location"
          >
            <h3>New Location</h3>
          </Link>
        </div>
        <div>
          <Link to="/location">
            <img src={Plus} alt="alt" style={{ height: '30px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
