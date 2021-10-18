// call: npm run dev-test
// exit: Strg + C
// restart: rs

//Import
const Block = require("./block")

//const block = new Block("time","hash1","hash2","irgen dwas");
//console.log(block.toString());

//console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(), "testData");
console.log(testBlock.toString());