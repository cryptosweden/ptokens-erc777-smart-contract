const {
  identity,
  memoizeWith,
} = require('ramda')
/* eslint-disable-next-line no-shadow */
const ethers = require('ethers')

const getProvider = memoizeWith(identity, _endpoint => {
  
  return Promise.resolve(new ethers.providers.JsonRpcProvider(_endpoint))
})

module.exports = { getProvider }
