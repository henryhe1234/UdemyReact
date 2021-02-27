import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID BtaXEkPZdluJMyK96KiTlW6t7srdbhsGXQxqql8TT2Y",
  }
});

