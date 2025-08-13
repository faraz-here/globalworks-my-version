import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1 className="title">404 - Page Not Found</h1>
        <p className="description">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="link">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
