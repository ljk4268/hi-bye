import axios from "axios";

function create(baseURL, options) {
  const instance = axios.create(Object.assign({baseURL}, options))
  return instance
}

export const api = create('http://175.45.200.71/v1/api')