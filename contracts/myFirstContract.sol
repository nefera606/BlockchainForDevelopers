pragma solidity ^0.4.21;

contract myFirstContract {
    //Declaracion de variables
    address public owner;
    uint256 private totalSupply;
    mapping (address=>uint256) internal balanceOf;

    event Transfered(address from, address indexed to,uint256 amount);

    //Consrutor del contrato
    constructor () {
    owner = msg.sender;
    balanceOf[msg.sender] = 10000;
    totalSupply = 10000;
    }

    //Modificadores
    modifier onlyOwner() {
        if(msg.sender != owner){
            throw;
        }
        _;
    }

    //funciones del contrato
    function send(address _to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount);
        require(balanceOf[_to] + amount >= balanceOf[_to]);

        balanceOf[msg.sender] -= amount;
        balanceOf[_to] += amount;

        emit Transfered(msg.sender, _to, amount);
    }

    function getBalance(address _user) view public onlyOwner returns(uint256) {
        return balanceOf[_user];
    }

}
