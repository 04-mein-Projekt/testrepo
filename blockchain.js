// Impotr
const Block = require("./block");

class Blockchain{

    constructor(data){
        this.chain = [Block.genesis(data)];
    }

    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);
    }

    toString(){
        let out = "\nBlockchain:\n";
        for (let index = 0; index < this.chain.length; index++) {
            out += "\nBlock " + index + this.chain[index].toString();
        }
        return out;

    }

}
module.exports = Blockchain; //Export al Modul