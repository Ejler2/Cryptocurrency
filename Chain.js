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

class Chain{
    constructor(){
        this.
    }
}