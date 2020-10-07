const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, tid, data, tidligerehash = ''){
        this.index = index;
        this.tid = tid;
        this.data = data;
        this.tidligerehash = tidligerehash;
        this.hash = '';
    }

    genererhash(){
        return SHA256(this.index, this.tid, this.data, JSON.stringify(this.data)).toString();
    }
}

class blockChain{
    constructor(){
        this.Chain = [this.createGenisisBlock()];
    }

    createGenisisBlock(){
        return new Block(0, 7/10/2020, "Genesis block", "0");
    }

    getLastBlock(){
        return this.Chain[this.Chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.genererhash();
        this.Chain.push(newBlock);
    }
}

let sæl = new blockChain();
sæl.addBlock(new Block(1, "1/1/2020", {amount: 4}));
sæl.addBlock(new Block(2, "1/10/2020", {amount: 10}));

console.log(JSON.stringify(sæl, null, 4));