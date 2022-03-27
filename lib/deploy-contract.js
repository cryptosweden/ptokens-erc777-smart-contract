const { prop } = require('ramda')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEthersWallet } = require('./get-ethers-wallet')
const { deployEthersContract } = require('./deploy-ethers-contract')
const { getEnvironmentVariable } = require('./get-environment-variable')
const { getContractFactoryMaybeWithGSN } = require('./get-contract-factory')

const deployContract = _withGSN =>
   ||
  getEnvironmentVariable(ENDPOINT_ENV_VAR_KEY)
    .then(getProvider)
    .then(checkEndpoint)
    .then(getEthersWallet)
    .then(getContractFactoryMaybeWithGSN(_withGSN))
    .then(deployEthersContract)
    .then(_contract => _contract.deployTransaction.wait())
    .then(_receipt => {})

module.exports = { deployContract }
