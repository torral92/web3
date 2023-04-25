const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx')

const web3 = new Web3('https://sepolia.infura.io/v3/de67cbd819264018b84ecc260989a01f')

const address1 = '0x6D3b0C9E6235B287187A0C5086BDF094AB880357'
const address2 = '0x178b7935cDc070970b507c96C9D683b0E72Adcf9'

const address1Key = new Buffer.from('c826357b3eb227fbae4318e9ec56c5cf00d9b82a3944532605ccd286fd334296')
const address2Key = new Buffer.from('e3ab031d9bb644763e2ceaacdce2c2d065d35103570e152029c7148f5306df8d')

//COdigo para obtener el balance, de las dos direcciones 
web3.eth.getBalance(address1, (err,balance) => {
    console.log(web3.utils.fromWei(balance, 'ether'))
})

web3.eth.getBalance(address2, (err,balance) => {
    console.log(web3.utils.fromWei(balance, 'ether'))
})

