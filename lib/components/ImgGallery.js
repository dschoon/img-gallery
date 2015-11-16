import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  displayName: 'ImgGallery',
  propTypes: {
    id: React.PropTypes.string,
    class: React.PropTypes.string,
    images: React.PropTypes.array.isRequired,
    columns: React.PropTypes.number,
    styles: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      id: '',
      class: '',
      images: [],
      columns: 3
    };
  },
  render() {
    const images = [];
    this.props.images.forEach((image, index) => {
        images.push(React.DOM.img({ key: index, className: 'img-instance', src: image.src }, null));
      }
    );

    return (
      <div id={this.props.id} className={'img-gallery ' + this.props.class} styles={this.props.styles}>
        {images}
      </div>
    );
  }
});
