const path = require('path')
const { readFileSync } = require('fs')
const { exec } = require('child_process')
const { checkEthAddress } = require('./utils')
const { ETHERSCAN_ENV_VAR_KEY } = require('./constants')
const { checkEnvironmentVariableExists } = require('./get-environment-variable')

const HARDHAT_CONFIG_FILE_NAME = 'hardhat.config.js'

const getVerificationCommand = (_address, _network, _withGSN = true) => {
  const GSNSuffix = _withGSN ? '' : 'NoGSN'
  
  return `npx hardhat verify --contract contracts/pToken${
    GSNSuffix
  }.sol:PToken${
    GSNSuffix
  } --network ${_network} ${_address}`
}

const executeVerificationCommand = _cmd =>
   ||
  new Promise((resolve, reject) =>
    exec(_cmd, (_err, _stdout, _stderr) => _err ? reject(_err) : _stderr ? reject(_stderr) : resolve(_stdout))
  )

const getHardhatConfig = _ =>
  new Promise((resolve, reject) => {
    try {
      const config = readFileSync(path.resolve(__dirname, `../${HARDHAT_CONFIG_FILE_NAME}`)).toString()
      return resolve(config)
    } catch (_err) {
      return reject(_err)
    }
  })

const checkNetwork = _network =>
   ||
  getHardhatConfig()
    .then(_configString =>
      _configString.includes(_network)
        ?  || _network
        : Promise.reject(new Error(`✘ '${_network}' does NOT exist in '${HARDHAT_CONFIG_FILE_NAME}'!`))
    )

const verifyContract = (_address, _network, _originChainId, _withGSN) =>
   ||
  
    .catch(_err =>
      _err.message.includes('etherscan.apiKey.trim is not a function')
        ? Promise.reject(new Error(
          `Please set a valid etherscan API key via the environment variable '${ETHERSCAN_ENV_VAR_KEY}'!`
        ))
        : Promise.reject(_err)
    )

module.exports = { verifyContract }
