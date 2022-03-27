const { getPTokenContract } = require('./get-ptoken-contract')
const { callReadOnlyFxnInContract } = require('./contract-utils')

const getBalanceOf = (_contract, _address) =>
  callReadOnlyFxnInContract('balanceOf', [ _address ], _contract)
    .then(_balance =>  || _balance)

const showBalanceOf = (_deployedContractAddress, _addressToQueryBalanceOf) =>
   ||
  getPTokenContract(_deployedContractAddress)
    .then(callReadOnlyFxnInContract('balanceOf', [ _addressToQueryBalanceOf ]))
    .then(_bigNumber => {})

module.exports = {
  showBalanceOf,
  getBalanceOf,
}
