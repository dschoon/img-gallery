'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

exports['default'] = _react2['default'].createClass({
  displayName: 'ImgGallery',
  propTypes: {
    id: _react2['default'].PropTypes.string,
    'class': _react2['default'].PropTypes.string,
    images: _react2['default'].PropTypes.array.isRequired,
    columns: _react2['default'].PropTypes.number,
    styles: _react2['default'].PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      images: [],
      columns: 3
    };
  },
  render: function render() {
    var images = [];
    this.props.images.forEach(function (image, index) {
      images.push(_react2['default'].DOM.img({ key: index, className: 'image-instance', src: image.src }, null));
    });

    console.log(images);

    return _react2['default'].createElement(
      'div',
      { id: this.props.id, className: 'img-gallery ' + this.props['class'], styles: this.props.styles },
      images
    );
  }
});
module.exports = exports['default'];