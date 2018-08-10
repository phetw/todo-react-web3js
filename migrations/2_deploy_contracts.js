var ExampleContract = artifacts.require('../contracts/Example.sol')

module.exports = function(deployer) {
  deployer.deploy(ExampleContract)
}
