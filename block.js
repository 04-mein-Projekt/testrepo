
const SHA256 = require("crypto-js/sha256");

// Klasse
class Block{

    constructor(lastHash, data){
        this.timestamp = Date.now(); // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = Block.hash(this.timestamp, lastHash, data); // Eigener Hash
        this.data = data; // Daten
    }

    toString(){
        return ` 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash:      ${this.hash}
            Data:      ${this.data}   `
    }

    static genesis(dataGenesis){  // 1. Block der Chain
        return new this ("------", dataGenesis);
    }

    static mineBlock(lastBlock, ownData){
        //const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash = lastBlock.hash;
        //const hash     = Block.hash(timestamp, lastHash, ownData);
        
        return new Block(lastHash, ownData);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

module.exports = Block; //Export al Modul