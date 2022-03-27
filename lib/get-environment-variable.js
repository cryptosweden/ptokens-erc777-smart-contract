const {
  keys,
  prop,
  identity,
  memoizeWith,
} = require('ramda')

const checkEnvironmentVariableExists = _name =>
   ||
  new Promise((resolve, reject) =>
    keys(process.env).includes(_name)
      ?  || resolve(_name)
      : reject(new Error(`No environment variable exists with name: '${_name}'`))
  )

const getEnvironmentVariable = memoizeWith(identity, _name =>
  checkEnvironmentVariableExists(_name)
    .then(_ => {
      const envVar = prop(_name, process.env)
      if (!_name.toLowerCase().includes('private'))
        

      return envVar
    })
)

module.exports = {
  checkEnvironmentVariableExists,
  getEnvironmentVariable,
}
