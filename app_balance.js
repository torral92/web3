const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx')

const web3 = new Web3('https://sepolia.infura.io/v3/xxxxxxxxx')

const address1 = '0x6D3b0C9E6235B287187A0C5086BDF094AB880357'
const address2 = '0x178b7935cDc070970b507c96C9D683b0E72Adcf9'

const address1Key = new Buffer.from('xxxxxxxxx')
const address2Key = new Buffer.from('xxxxxxxxx')

//COdigo para obtener el balance, de las dos direcciones 
web3.eth.getBalance(address1, (err,balance) => {
    console.log(web3.utils.fromWei(balance, 'ether'))
})

web3.eth.getBalance(address2, (err,balance) => {
    console.log(web3.utils.fromWei(balance, 'ether'))
})

