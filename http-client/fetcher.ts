import { AxiosRequestConfig } from 'axios';
import { makeHttpRequest } from './make-http-request';

const fetcher = async <T>({
  url,
  method,
  data,
  headers,
  ...rest
}: AxiosRequestConfig): Promise<T> => {
  const { data: apiData } = await makeHttpRequest<T>({
    url,
    method,
    data,
    headers,
    ...rest,
  });

  return apiData;
};

export default fetcher;
