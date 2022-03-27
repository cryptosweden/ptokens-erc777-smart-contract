const {
  has,
  prop,
} = require('ramda')
/* eslint-disable-next-line no-shadow */
const ethers = require('ethers')

const maybeAddHexPrefix = _hex =>
  Promise.resolve(_hex.startsWith('0x') ? _hex : `0x${_hex}`)

const checkIsHex = _hex =>
   ||
  maybeAddHexPrefix(_hex)
    .then(_prefixedHex =>
      ethers.utils.isHexString(_prefixedHex)
        ?  || _prefixedHex
        : Promise.reject(new Error(`${_hex} is NOT valid hex!`))
    )

const getKeyFromObj = (_objName, _obj, _key) =>
  new Promise((resolve, reject) => {
    has(_key, _obj)
      ? resolve(prop(_key, _obj))
      : reject(new Error(`${_objName} object does not have key: '${_key}'`))
  })

const checkEthAddress = _address =>
   ||
  new Promise((resolve, reject) =>
    ethers.utils.isAddress(_address)
      ?  || resolve(_address)
      : reject(new Error(`'${_address}' is NOT a valid ETH address!`))
  )

const shortenEthAddress = _address =>
  `${_address.slice(0, 6)}...${_address.slice(-4)}`

const convertStringToBool = _s =>
  _s === 'true'

module.exports = {
  convertStringToBool,
  maybeAddHexPrefix,
  shortenEthAddress,
  checkEthAddress,
  getKeyFromObj,
  checkIsHex,
}
