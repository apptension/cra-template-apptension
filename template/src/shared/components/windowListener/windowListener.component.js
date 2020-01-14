import { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

/**
 * It adds a window event listener
 **/
export class WindowListener extends Component {
  /**
   * PropTypes
   * @param throttle {number} - throttle (in ms) for the event listener function
   * @param onEvent {function} - function to call then the _eventType_ event is invoked
   * @param eventType {string} - event type on window to listen to
   * @param options {object} - additional listener options
   **/
  static propTypes = {
    throttle: PropTypes.number,
    eventType: PropTypes.string,
    options: PropTypes.any,
    onEvent: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener(this.props.eventType, this.handler, this.props.options);
  }

  componentWillUnmount() {
    window.removeEventListener(this.props.eventType, this.handler, this.props.options);
  }

  getHandledFunction() {
    if (!this.props.throttle) {
      return this.props.onEvent;
    }
    return throttle(this.props.onEvent, this.props.throttle, { leading: true, trailing: true });
  }

  handler = this.getHandledFunction();

  render = () => null;
}
