const dotenv = require('dotenv');
const Web3 =  require('web3');
const EthereumTransaction = require('ethereumjs-tx').Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545');




// -- Step 2: Set the sending and receiving addresses for the transaction. 
const sendingAddress = '0xCf8Fbbe2B7Fbc110625910f1f8b9CeA60E59Cc86' 
const receivingAddress = '0xdEB2A5245736605CccA56b11d11Ca37ae4D44df9'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*##########################

CREATE A TRANSACTION
##########################*/
function ascii_2_0xhex(num){
    return "0x" + num.toString(16)
  }
  

// -- Step 4: Set up the transaction using the transaction variables as shown 
const rawTransaction = {
     nonce: ascii_2_0xhex(0), 
     to: receivingAddress, 
     gasPrice: ascii_2_0xhex(20000000), 
     gasLimit: ascii_2_0xhex(30000), 
     value: ascii_2_0xhex(100), 
     data: null
    }

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################

Sign the Transaction
##########################*/


// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
const privateKeySender = '463b294d4c33ccbdd79ad82b3487f98c407685199118b83191e5f5c7dc55ca07' ;
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
 var transaction = new EthereumTransaction(rawTransaction);
 transaction.sign(privateKeySenderHex)

/*#########################################

Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
const serializedTransaction = transaction.serialize();
 web3.eth.sendSignedTransaction(serializedTransaction);

