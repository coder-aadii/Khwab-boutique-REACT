import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="animated-dots"></div>
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Oops! The page you're looking for seems to have vanished into thin air.
        </p>
        <Link to="/" className="return-home-btn">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
