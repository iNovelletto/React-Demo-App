import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
      return (
        <div className="jumbotron">
          <h1>XPTO</h1>
          <p>Test React, Redux, React Router in ES6</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      );
  }
}

export default HomePage;
