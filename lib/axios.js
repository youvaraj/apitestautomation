// lib/axios.js
const axios = require('axios');
const config = require('../config/config');

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;
