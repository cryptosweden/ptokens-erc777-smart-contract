const { BigNumber } = require('ethers')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEthersWallet } = require('./get-ethers-wallet')
const { getEnvironmentVariable } = require('./get-environment-variable')

const sendEth = (_address, _amount) =>
   ||
  getEnvironmentVariable(ENDPOINT_ENV_VAR_KEY)
    .then(getProvider)
    .then(checkEndpoint)
    .then(getEthersWallet)
    .then(_wallet => _wallet.sendTransaction({ to: _address, value: BigNumber.from(_amount) }))
    .then(_tx =>  || _tx.wait())
    .then(_receipt => {})

module.exports = { sendEth }
