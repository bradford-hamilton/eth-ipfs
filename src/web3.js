// overrides metamask v0.20 for 1.0 beta
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export default web3;
