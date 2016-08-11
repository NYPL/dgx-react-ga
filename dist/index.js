import ga from 'react-ga';
import config from './config.js';

function GaUtils() {
  /**
   * _trackGeneralEvent(category)
   * Track a GA event.
   *
   * @param {category} String Category for GA event.
   * @param {action} String Action for GA event.
   * @param {label} String Label for GA event.
   */
  this._trackGeneralEvent = (category, action, label) => {
    return ga.event({
      category,
      action,
      label
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
  this._trackEvent = category => {
    return (action, label) => {
      return ga.event({
        category,
        action,
        label
      });
    };
  };

  this._setPublicPreviewDimension = () => {
    return ga.ga('set', 'dimension1', 'Public Preview');
  };

  this._sendPublicPreviewDimension = () => {
    return ga.ga('send', 'pageview');
  };
}

export default {
  ga: new GaUtils(),
  config
};