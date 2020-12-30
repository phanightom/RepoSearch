import axios from 'axios'
import {camelizeKeys, pascalizeKeys} from 'humps'

export const api = axios.create({
  withCredentials: true,
  transformRequest: function(data) {
    if (typeof data === 'object' && !(data instanceof FormData)) {
      return JSON.stringify(pascalizeKeys(data))
    }
    return data
  },
  transformResponse: function(data, headers) {
    if (
      !(data instanceof Blob) &&
      headers &&
      headers['content-type'] &&
      headers['content-type'].indexOf('application/json') > -1
    ) {
      try {
        return camelizeKeys(JSON.parse(data))
      } catch (ex) {
        return camelizeKeys(data)
      }
    }
    return data
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})