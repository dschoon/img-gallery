import React from 'react';
import ImgGallery from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>React img-gallery</h1>
        <ImgGallery/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
