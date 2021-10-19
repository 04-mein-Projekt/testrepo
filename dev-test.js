// call: npm run dev-test
// exit: Strg + C
// restart: rs

//Import
const Block = require("./block");
const Blockchain = require("./blockchain");

//const block = new Block("time","hash1","hash2","irgen dwas");
//console.log(block.toString());

//const genesis = Block.genesis();
//console.log(genesis.toString());

//const testBlock = Block.mineBlock(genesis, "testData");
//const testBlock = new Block(genesis.hash, "testData");
//console.log(testBlock.toString());

const chain = new Blockchain("genesis");
chain.addBlock("daten von Block 1");
chain.addBlock("daten von Block 2");
chain.addBlock("daten von Block 3");
chain.addBlock("daten von Block 4");

console.log(chain.toString());