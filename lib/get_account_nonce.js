const { curry } = require('ramda')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEnvironmentVariable } = require('./get-environment-variable')

const getAccountNonceOfAddress = curry((_address, _provider) =>
  _provider.send('eth_getTransactionCount', [ _address, 'latest' ]).then(parseInt)
)

const getAccountNonce = _address =>
   ||
  

module.exports = { getAccountNonce }
