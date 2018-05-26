var sc = require('jseth');
var fs = require('fs');
sc.setProvider();
var myFirstContract;
var truffleBuild = JSON.parse(fs.readFileSync('./build/contracts/myFirstContract.json', 'utf8'));
sc.jsethContractFromTruffle(truffleBuild,(err,res)=>{
  if(err== null){
    myFirstContract = res;
  }
});


exports.send = function(req, res) {
  myFirstContract.instance.send(req.body.address,req.body.amount, {from:req.body.sender, gas:2000000});
  res.send("Sent");
};

exports.balanceOf = function(req, res) {
  var response;
  //Adapatación de la llamada desde Postman para aceptar un address
  var address = "0x" + JSON.stringify(req.params.address).slice(1,JSON.stringify(req.params.address).length-1);
  var web3 = sc.getWeb3Instance();
  response = myFirstContract.instance.getBalance(address, {from:web3.eth.accounts[0], gas:2000000});
  res.send(response);
};
