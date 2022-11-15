const axios = require('axios');
const headers = {
  'User-Agent': 'cfx-api',
};
const EndPoints = {
  CFX_MASTERLIST: 'https://servers-frontend.fivem.net/api/servers/single/',
  CFX_STATUS_SUMMARY: 'https://status.cfx.re/api/v2/status.json',
  CFX_STATUS_COMPONENTS: 'https://status.cfx.re/api/v2/components.json',
};

/**
 * Make a call to the passed endpoint from Cfx.re API.
 * @param {string} endpoint The Endpoint to reach.
 * @return {Promise<AxiosResponse>}
 */
async function get(endpoint) {
  if (!EndPoints[endpoint]) {
    throw new Error(`Unknowed endpoint : '${endpoint}'`);
  }
  return (await axios.get(endpoint, { headers: headers }));
}

module.exports = {
  EndPoints,
  get,
};
