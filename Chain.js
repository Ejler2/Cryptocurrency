const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, tid, data, tidligerehash = ''){
        this.index = index;
        this.tid = tid;
        this.data = data;
        this.tidligerehash = tidligerehash;
        this.hash = '';
    }

    genererhash{
        return SHA256(this.index, this.tid, this.data, JSON.stringify(this.data)).toString();
    }
}

class blockChain{
    constructor(){
        this.Chain = [this.createGenisisBlock()];
    }

    createGenisisBlock(){
        return new Block(0, 07/10/2020, "Genesis block", "0")
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }
}