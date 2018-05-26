var myFirstContract = artifacts.require("../contracts//myFirstContract.sol");

module.exports = function(deployer) {
  deployer.deploy(myFirstContract);
};
