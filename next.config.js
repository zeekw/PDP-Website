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
  distDir: 'build',
  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    EMAILJS_UID: process.env.EMAILJS_UID
  }
}));
