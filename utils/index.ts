/* eslint-disable prefer-spread */
export { random, debounce, range };
/**
 *Returns random number in specified range
 *@function random
 *@param {number} min - lower boundary of range
 *@param {number} max - upper boundary of range
 *@returns {number} random number in range
 */

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 *Generates array in specified range and with specified step
 *@function range
 *@param {number} start - lower boundary of range
 *@param {number} end - upper boundary of range
 *@returns {Array<number>} random number in range
 */

const range = (start: number, end: number, step = 1): number[] => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

/**
 *Classic JS Debounce utility function
 *@function debounce
 *@param {function} callback - callback offunction to be debounced
 *@param {number} delay - debounce delay in milliseconds
 *@returns {function} debounced function
 */
const debounce = (callback: unknown, delay: number): (() => unknown) => {
  let timeoutID: null | number = null;

  return (...args) => {
    if (timeoutID) window.clearTimeout(timeoutID);

    timeoutID = window.setTimeout(() => {
      if (typeof callback === 'function') callback.apply(null, args);
    }, delay);
  };
};
