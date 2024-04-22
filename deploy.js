const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "betray march select unable zero trouble small render obey off click kangaroo",
  "https://sepolia.infura.io/v3/bd333d08c1d44733b65868a1f2a6993b"
);

const web3 = new Web3(provider);
