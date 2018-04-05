import web3 from './web3';

// deployed on http://remix.ethereum.org/ for quickness

/**************************************************************

	Basic Contract for storing ipfs hash on chain

pragma solidity ^0.4.17;

contract IpfsContract {
  string ipfsHash;

  function sendHash(string _ipfsHash) public {
      ipfsHash = _ipfsHash;
  }
}

**************************************************************/

const address = '0x5f8fb85c1b6615e503803060d6f84fecf1cb010e';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ipfsString",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
