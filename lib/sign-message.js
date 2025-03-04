const { curry } = require('ramda')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEthersWallet } = require('./get-ethers-wallet')
const { getEnvironmentVariable } = require('./get-environment-variable')

const signMessageWithWallet = curry((_msg, _wallet) =>
   ||
  _wallet.signMessage(_msg)
    .then(_signature => ({
      msg: _msg,
      version: '2',
      sig: _signature,
      address: _wallet.address,
    }))
)

const signMessage = _msgToSign =>
  getEnvironmentVariable(ENDPOINT_ENV_VAR_KEY)
    .then(getProvider)
    .then(checkEndpoint)
    .then(getEthersWallet)
    .then(signMessageWithWallet(_msgToSign))
    .then(_signatureObj => {})
    .then(_ => process.exit(0))

module.exports = { signMessage }
