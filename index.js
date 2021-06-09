const Web3 =  require('web3');
const EthereumTransaction = require('ethereumjs-tx');
var web3 = new Web3('HTTP://127.0.0.1:7547');

// -- Step 2: Set the sending and receiving addresses for the transaction. 
const sendingAddress = 'ADDRESS FROM GANACHE GOES HERE' 
const receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);
