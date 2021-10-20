import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

/**
 *This function handles all api calls. Singleton instance of axios client.
 *@function makeHttpRequest
 *@param {AxiosRequestConfig} object - API request configuration
 *@returns {AxiosPromise<T>} - Axios Promise
 */
export const makeHttpRequest = <T>({
  url,
  method = 'GET',
  params = {},
  data = {},
  headers = {},
  ...rest
}: AxiosRequestConfig): AxiosPromise<T> => {
  return axios({ url, method, params, data, headers, ...rest });
};
