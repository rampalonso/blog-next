const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const env = {
    SITE_NAME: "EDblog",
    API_BLOG: (() => {
      if (isDev) {
        return 'https://jsonplaceholder.typicode.com'
      } else {
        return 'https://api.edblog.com'
      }
    })()
  };
  return {
    env,
  }
}