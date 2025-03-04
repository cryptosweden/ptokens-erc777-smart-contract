const rejectAfterXMilliseconds = _milliseconds =>
  new Promise((resolve, reject) =>
    setTimeout(reject, _milliseconds, Error(`Timed out after ${_milliseconds / 1000}s!`))
  )

const rejectAfterThreeSeconds = _ =>
  rejectAfterXMilliseconds(3000)

const addTimeoutToPromise = (_promise, _promiseParams = []) =>
  Promise.race([ _promise(..._promiseParams), rejectAfterThreeSeconds() ])

const checkEndpointWithNoTimeout = _provider =>
   ||
  _provider
    .send('eth_blockNumber', [])
    .then(_height =>  || _provider)
    .catch(_err => Promise.reject(new Error(`Endpoint error: ${_err.message}`)))

const checkEndpoint = _provider =>
  addTimeoutToPromise(checkEndpointWithNoTimeout, [ _provider ])

module.exports = { checkEndpoint }
