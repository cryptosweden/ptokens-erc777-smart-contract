const deployEthersContract = (_contractFactory, _constructorArgs = []) =>
   ||
  _contractFactory
    .deploy(..._constructorArgs)
    .catch(_err => Promise.reject(new Error(`${_err.message}\n✘ Deployment failed! See above for more info.`)))

module.exports = { deployEthersContract }
