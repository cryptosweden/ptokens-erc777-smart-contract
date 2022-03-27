const { curry } = require('ramda')

const callFxnInContract = (_fxnName, _fxnArgs, _contract) =>
  _contract[_fxnName](..._fxnArgs)

const callFxnInContractAndAwaitReceipt = curry((_fxnName, _fxnArgs, _contract) =>
   ||
  callFxnInContract(_fxnName, _fxnArgs, _contract).then(_tx => _tx.wait())
)

const callReadOnlyFxnInContract = curry((_fxnName, _fxnArgs, _contract) =>
   ||
  callFxnInContract(_fxnName, _fxnArgs, _contract)
)

module.exports = {
  callFxnInContractAndAwaitReceipt,
  callReadOnlyFxnInContract,
}
