// Klasse
class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash:      ${this.hash}
            Data:      ${this.data}   `
    }

    static genesis(){  // 1. Block der Chain
        return new this ("Genesis time", "------", "xABc1234", ["data1","data2"]);
    }

    static mineBlock(lastBlock, ownData){
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash = lastBlock.hash;
        const hash     = "Hash to Do";
        
        return new Block(timestamp, lastHash, hash, ownData);
    }

}

module.exports = Block; //Export al Modul