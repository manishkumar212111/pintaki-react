// 'use strict';

import React from 'react';
// import { Link } from 'react-router';
const defaultProps = {
	seo  : {title : "Project Listing" , pageDescription : "This is page Description"},
}

export default class NotFoundPage extends React.Component {
  static fetchData(props, cb) {
    cb(defaultProps)
  }
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          {/* <Link to="/">Go back to the main page</Link> */}
        </p>
      </div>
    );
  }
}
