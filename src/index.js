import ga from 'react-ga';
import config from './config.js';

function GaUtils() {
  /**
   * trackGeneralEvent(category)
   * Track a GA event.
   *
   * @param {category} String Category for GA event.
   * @param {action} String Action for GA event.
   * @param {label} String Label for GA event.
   */
  this.trackGeneralEvent = (category, action, label) => (
    ga.event({
      category,
      action,
      label,
    })
  );

  /**
   * trackEvent(category)
   * Track a GA click event, wrapped in a curried function.
   *
   * @param {category} String Category for GA event.
   * @returns {function} Returns a function with the category set.
   *  Then you pass in the action and the label.
   */
  this.trackEvent = category =>
    (action, label) => (
      ga.event({
        category,
        action,
        label,
      })
    );

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
  this.setDimension = (dimensionIndex = '', dimensionValue = '') =>
    ga.set({ [dimensionIndex]: dimensionValue });
}

export default {
  gaUtils: new GaUtils(),
  config,
  ga,
};
