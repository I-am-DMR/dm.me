import React from 'react';
import Slider from './Slider';
import { Col } from 'shards-react';

function App() {
  return (
    <React.Fragment>
      <div className="container">

      <Col xs="12" sm="4" className="text-sm-left text-center text-md-left mb-sm-0">
        <span className="text-uppercase page-subtitle">Components</span>
        <h3 className="page-title">Posts</h3>
      </Col>
      <Slider />
      </div>
    </React.Fragment>
  );
}

export default App;
