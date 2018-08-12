const TodoContract = artifacts.require('../contracts/Todo.sol')

module.exports = function(deployer) {
  deployer.deploy(TodoContract)
}
