const { curry } = require('ramda')
const { BigNumber } = require('ethers')
const { getBalanceOf } = require('./get-balance-of')

const checkTokenBalanceIsSufficient = curry((_amount, _contract) =>
   ||
  getBalanceOf(_contract, _contract.signer.address)
    .then(_balance => {
      if (BigNumber.from(_amount).gt(BigNumber.from(_balance)))
        return Promise.reject(new Error(`Cannot use ${_amount} ∵ balance is only ${_balance.toString()}!`))
    })
    .then(_ =>  || _contract)
)

module.exports = { checkTokenBalanceIsSufficient }
