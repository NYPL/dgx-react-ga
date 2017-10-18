'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GaUtils() {
  /**
   * _trackGeneralEvent(category)
   * Track a GA event.
   *
   * @param {category} String Category for GA event.
   * @param {action} String Action for GA event.
   * @param {label} String Label for GA event.
   */
  this.trackGeneralEvent = function (category, action, label) {
    return _reactGa2.default.event({
      category: category,
      action: action,
      label: label
    });
  };

  /**
   * _trackEvent(category)
   * Track a GA click event, wrapped in a curried function.
   *
   * @param {category} String Category for GA event.
   * @returns {function} Returns a function with the category set.
   *  Then you pass in the action and the label.
   */
  this.trackEvent = function (category) {
    return function (action, label) {
      return _reactGa2.default.event({
        category: category,
        action: action,
        label: label
      });
    };
  };

  /**
  * setDimension(dimensionIndex, dimensionValue)
  * Set the dimension for GA. Every dimension includes two arguments:
  * the index and the value.
  * First set the dimension in the admin of GA's dashboard
  * so the value could be passed to it.
  *
  * @param {dimensionIndex} String
  * @param {dimensionValue} String
  * @returns {function} Returns a function with the dimension set.
  */
  this.setDimension = function () {
    var dimensionIndex = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var dimensionValue = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    return _reactGa2.default.set(_defineProperty({}, dimensionIndex, dimensionValue));
  };

  this.trackPageview = function (url) {
    return _reactGa2.default.pageview(url);
  };
}

exports.default = {
  ga: new GaUtils(),
  config: _config2.default
};
module.exports = exports['default'];