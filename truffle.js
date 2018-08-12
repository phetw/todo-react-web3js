const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'

module.exports = {
  contracts_build_directory: path.join(__dirname, './src/contracts'),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*'
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/APIKEY')
      },
      network_id: 4
    }
  }
}
