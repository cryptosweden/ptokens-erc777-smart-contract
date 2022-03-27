const { getPTokenContract } = require('./get-ptoken-contract')
const { callFxnInContractAndAwaitReceipt } = require('./contract-utils')

const changeOriginChainId = (_deployedContractAddress, _originChainId) =>
   ||
  getPTokenContract(_deployedContractAddress)
    .then(callFxnInContractAndAwaitReceipt('changeOriginChainId', [ _originChainId ]))
    .then(_receipt => {})

module.exports = { changeOriginChainId }
