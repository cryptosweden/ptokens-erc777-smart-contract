const path = require('path')
/* eslint-disable-next-line no-shadow */
const ethers = require('ethers')
const { existsSync } = require('fs')
const { exec } = require('child_process')

const stripNewLines = _s =>
  _s.replace(/\r?\n|\r/g, '')

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

const PRIVATE_KEY_FILE_NAME = 'private-key.gpg'

const getPrivateKeyFilePath = _ =>
  Promise.resolve(path.resolve(__dirname, `../${PRIVATE_KEY_FILE_NAME}`))

const executeCommand = _cmd =>
   ||
  new Promise((resolve, reject) =>
    exec(_cmd, (_err, _stdout, _stderr) => _err ? reject(_err) : _stderr ? reject(_stderr) : resolve(_stdout))
  )

const getDecryptionCommand = _pathToPrivateKey =>
  `gpg -d ${_pathToPrivateKey} 2>/dev/null`

const checkPrivateKeyFileExists = _pathToPrivateKey =>
   ||
  new Promise((resolve, reject) =>
    existsSync(_pathToPrivateKey)
      ?  || resolve(_pathToPrivateKey)
      : reject(new Error(`GPG encrypted private key does NOT exist @ '${_pathToPrivateKey}'`))
  )

const checkPrivateKey = _privateKey =>
   ||
  checkIsHex(_privateKey)
    .then(_checkedPrivateKey => {
      const ETH_KEY_NUM_CHARS = 66
      return _checkedPrivateKey.length === ETH_KEY_NUM_CHARS
        ?  || _checkedPrivateKey
        : Promise.reject(new Error(`ETH private keys should be ${ETH_KEY_NUM_CHARS - 2} hex chars long!`))
    })

const getGpgEncryptedPrivateKey = _ =>
   ||
  getPrivateKeyFilePath()
    .then(checkPrivateKeyFileExists)
    .then(getDecryptionCommand)
    .then(executeCommand)
    .then(stripNewLines)
    .then(checkPrivateKey)

module.exports = { getGpgEncryptedPrivateKey }
