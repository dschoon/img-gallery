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
    images: _react2['default'].PropTypes.array.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      'class': '',
      images: []
    };
  },
  render: function render() {
    var images = [];
    this.props.images.forEach(function (image, index) {
      images.push(_react2['default'].DOM.a({ href: image.src }, _react2['default'].DOM.img({ key: index, className: 'img-instance', src: image.src }, null)));
    });

    return _react2['default'].createElement(
      'div',
      { id: this.props.id, className: 'img-gallery ' + this.props['class'] },
      images
    );
  }
});
module.exports = exports['default'];