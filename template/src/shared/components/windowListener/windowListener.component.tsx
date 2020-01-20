import { FC, useEffect } from 'react';
import makeThrottled from 'lodash.throttle';

/**
 * @param throttle {number} - throttle (in ms) for the event listener function
 * @param onEvent {function} - function to call then the _eventType_ event is invoked
 * @param eventType {string} - event type on window to listen to
 * @param options {object} - additional listener options
 **/
export interface WindowListenerProps {
  throttle: number;
  eventType: string;
  options: object;
  onEvent: () => void;
}

/**
 * It adds a window event listener
 **/
export const WindowListener: FC<WindowListenerProps> = ({ eventType, options, onEvent, throttle }) => {
  const throttledFn = (fn: (...args: any[]) => any) => makeThrottled(fn, throttle, { leading: true, trailing: true });
  const handler = throttle ? throttledFn(onEvent) : onEvent;

  useEffect(() => {
    window.addEventListener(eventType, handler, options);

    return () => {
      window.removeEventListener(eventType, handler, options);
    };
  });

  return null;
};
