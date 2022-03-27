const {
  prop,
  curry,
  identity,
  memoizeWith,
} = require('ramda')
/* eslint-disable-next-line no-shadow */
const ethers = require('ethers')
const { getGpgEncryptedPrivateKey } = require('./get-gpg-encrypted-private-key')

const getNewEthersWallet = curry((_provider, _privateKey) => {
  return new ethers.Wallet(_privateKey, _provider)
})

const getEthersWallet = memoizeWith(identity, _provider =>
   ||
  getGpgEncryptedPrivateKey()
    .then(getNewEthersWallet(_provider))
    .then(_wallet =>  || _wallet)
    .catch(_err => Promise.reject(new Error(`Error getting wallet from private key: ${_err.message}`)))
)

module.exports = { getEthersWallet }
