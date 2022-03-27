const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEnvironmentVariable } = require('./get-environment-variable')

const ERC1820_REGISTRY_ADDRESS = '0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24'

const getCodeAtRegistryAddress = _provider =>
  _provider.send('eth_getCode', [ ERC1820_REGISTRY_ADDRESS, 'latest' ])

const byteCodeExists = _byteCode =>
  _byteCode !== '0x'

const checkErc1820RegistryExists = _ =>
   ||
  getEnvironmentVariable(ENDPOINT_ENV_VAR_KEY)
    .then(getProvider)
    .then(checkEndpoint)
    .then(getCodeAtRegistryAddress)
    .then(_byteCode => byteCodeExists(_byteCode)
      ? 
      : 
    )

module.exports = { checkErc1820RegistryExists }
