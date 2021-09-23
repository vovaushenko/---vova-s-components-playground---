import React from 'react';

/**
 *Custom hook designed to create a reactive local-storage-bound piece of state
 *@function usePrefersReducedMotion
 *@param {unknown} defaultValue - initial value to be persisted to local storage
 *@param {string} key - key to be used in local storage
 *@returns {Array<getValue, setValue>>} - returns getter and setter for a persisted value
 */
export const useLocalStorageState = (
  defaultValue: unknown,
  key: string
): [unknown, React.Dispatch<unknown>] => {
  const [value, setValue] = React.useState(() => {
    const stickyValue =
      typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
