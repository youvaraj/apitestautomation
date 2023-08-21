// helpers/apiHelpers.js
const axios = require('../lib/axios');

module.exports = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await axios.put(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  remove: async (endpoint) => {
    try {
      const response = await axios.delete(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
