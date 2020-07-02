module.exports = {
  appName: 'icarus-poc-backend-service',
  server: {
    port: 8080,
    apiConfig: {
      addressesRequestLimit: 50,
      txHistoryResponseLimit: 30,
    },
    disableHealthcheck: false,
    allowCredentials: false,
  },
  cardanoHttpBridgeUrl: 'http://cardano-http-bridge:8082',
}
