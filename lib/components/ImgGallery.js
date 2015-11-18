import React from 'react';

const Lightbox = React.createClass({
  displayName: 'Lightbox',
  propTypes: {
    src: React.PropTypes.string
  },
  render() {
    return (
      React.DOM.div({ id: 'lg-img' },
        React.DOM.img({ src: this.props.src }, null)
      )
    );
  }
});

export default React.createClass({
  displayName: 'ImgGallery',
  propTypes: {
    id: React.PropTypes.string,
    class: React.PropTypes.string,
    images: React.PropTypes.array.isRequired,
    useLightbox: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      id: '',
      class: '',
      images: [],
      useLightbox: false
    };
  },
  getInitialState() {
    return {
      activeImage: false
    };
  },
  displayLightbox(imageSrc) {
    if (imageSrc) {
      this.setState({ activeImage: { src: imageSrc } });
    } else {
      this.setState({ activeImage: false });
    }
  },
  render() {
    const images = [];
    this.props.images.forEach((image, index) => {
      images.push(
        this.props.useLightbox ?
          React.DOM.img({ key: index, src: image.src, onClick: this.displayLightbox.bind(null, image.src),
            style: { cursor: 'pointer' } }, null)
          :
          React.DOM.a({ key: index, href: image.href },
            React.DOM.img({ key: index, src: image.src }, null)
          )
      );
    });

    return (
      React.DOM.div({},
        React.DOM.div({ id: this.props.id, className: 'img-gallery ' + this.props.class },
          images
        ),
        React.DOM.div({},
          this.state.activeImage ?
            React.DOM.div({ id: 'img-lightbox', onClick: this.displayLightbox.bind(null, false) },
              React.createElement(Lightbox, { src: this.state.activeImage.src })
            ) : null
        )
      )
    );
  }
});
