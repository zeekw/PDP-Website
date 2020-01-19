require('dotenv').config()
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');

module.exports = withCSS(withSASS({
  exportPathMap: (() => {
    return {
      '/': {
        page: '/',
      },
    };
  }),
  env: {
    sanity_token: process.env.sanity_token,
    emailjs_uid: process.env.emailjs_uid
  },
  target: 'serverless'
}));
