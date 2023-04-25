const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx') // Permite el empaquetado y firma.
const ethTx = require('ethereumjs-tx').Transaction
const web3 = new Web3('https://sepolia.infura.io/v3/de67cbd819264018b84ecc260989a01f')

const address1 = '0x6D3b0C9E6235B287187A0C5086BDF094AB880357'
const address2 = '0x178b7935cDc070970b507c96C9D683b0E72Adcf9'

const address1Key = Buffer.from('c826357b3eb227fbae4318e9ec56c5cf00d9b82a3944532605ccd286fd334296','hex')
const address2Key = Buffer.from('e3ab031d9bb644763e2ceaacdce2c2d065d35103570e152029c7148f5306df8d','hex')

//Numero de transaccion para una address determinada, enviamos de la address uno a la 2.

web3.eth.getTransactionCount(address1 ,(err,txCount) => {
    const rawTx = {
        nonce: web3.utils.toHex(txCount),
        gasPrice: web3.utils.toHex(web3.utils.toWei('1.5', 'gwei')), //convertir gwei en wei el limite de gas, para priorizar la transaccion.
        gasLimit: web3.utils.toHex(21000),
        to: address2,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether'))

    }

    const tx = new ethTx(rawTx)
    tx.sign(address1Key)

    serializedTx = tx.serialize().toString('hex')

    web3.eth.sendSignedTransaction('0x'+serializedTx).on('receipt', console.log)



    
})


