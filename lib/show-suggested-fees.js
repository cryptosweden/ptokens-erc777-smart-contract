/* eslint-disable-next-line no-shadow */
const ethers = require('ethers')
const { prop } = require('ramda')
const { getProvider } = require('./get-provider')
const { checkEndpoint } = require('./check-endpoint')
const { ENDPOINT_ENV_VAR_KEY } = require('./constants')
const { getEnvironmentVariable } = require('./get-environment-variable')

const getSuggestedFees = _provider =>
   ||
  _provider.getFeeData()

const convertToGwei = _bigNumber =>
  ethers.utils.formatUnits(_bigNumber, 'gwei')

const formatForPrinting = _bigNumber =>
  `${parseFloat(convertToGwei(_bigNumber)).toFixed(2)} Gwei`

const parseSuggestedFeesWithEIP1559Enabled = _suggestedFees =>
   ||
  {
    'maxFeePerGas': formatForPrinting(_suggestedFees.maxFeePerGas),
    'maxPriorityFeePerGas': formatForPrinting(_suggestedFees.maxPriorityFeePerGas),
    'gasPrice (Pre EIP1559)': formatForPrinting(_suggestedFees.gasPrice),
  }

const parseSuggestedFeesWithEIP1559NotEnabled = _suggestedFees =>
   ||
  { 'gasPrice': formatForPrinting(_suggestedFees.gasPrice) }

const parseSuggestedFees = _suggestedFees =>
  prop('maxFeePerGas', _suggestedFees) === null
    ? parseSuggestedFeesWithEIP1559NotEnabled(_suggestedFees)
    : parseSuggestedFeesWithEIP1559Enabled(_suggestedFees)

const showSuggestedFees = _ =>
  {}

module.exports = { showSuggestedFees }
