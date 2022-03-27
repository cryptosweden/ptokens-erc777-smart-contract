const { curry } = require('ramda')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEnvironmentVariable } = require('./get-environment-variable')

const sendRawTx = curry((_signedTx, _provider) =>
  _provider.send('eth_sendRawTransaction', [ _signedTx ])
)

const pushRawSignedTx = _signedTx =>
   ||
  

module.exports = { pushRawSignedTx }
