const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx')
const fs = require('fs')
const solc = require('solc')


const web3 = new Web3('https://sepolia.infura.io/v3/de67cbd819264018b84ecc260989a01f')

const address1 = '0x6D3b0C9E6235B287187A0C5086BDF094AB880357'
const address1Key = Buffer.from('c826357b3eb227fbae4318e9ec56c5cf00d9b82a3944532605ccd286fd334296','hex')

const content = fs.readFileSync('coches.sol').toString()
var objectSol = {
    language: 'Solidity',
    sources: {
        'Coches': {
            content: content
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

//COpilamos a patir del abi con el rigtcode.

const output = JSON.parse(solc.compile(JSON.stringify(objectSol))) // tenemos en java script en formato jason la copilacion de nuestro smart contract
const bytecodeContract = output.contracts.Coches.coches.evm.bytecode.object
// Creamos objeto de transaccion.
web3.eth.getTransactionCount(address1, (err, txCount) => {
    const txObject= {
        nonce: web3.utils.txHex(txCount),
        to:null,
        gasLimit: web3.utils.toHex(1000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('12', 'gwei')),
        data: '0x' + bytecodeContract // campo necesario para smartcontract. 
    }
// Firmar 

    const tx = new EthereumTx(txObject)
    tx.sign(address1Key)

    const serializedTx = tx.serialize().toString('hex')

    web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', receipt => {
        console.log('Contrato subido:' + receipt.contractAddress)
    })

})
