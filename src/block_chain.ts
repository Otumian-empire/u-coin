import Block from "./block";
import { TransactionType } from "./util";

export default class BlockChain {
    _chain: Block<TransactionType>[];
    _difficulty = 3;

    constructor() {
        this._chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        const genesisBlock = new Block(
            0,
            new Date("2024-10-02T04:45:06.903Z"),
            // the data could have been anything
            { message: "This was supposed to be a joke 1" },
            "0"
        );

        genesisBlock.minBlock(this._difficulty);

        return genesisBlock;
    }

    getLatestBlock() {
        return this._chain[this._chain.length - 1];
    }

    addBlock(newBlock: Block<TransactionType>) {
        newBlock._previousHash = this.getLatestBlock()._hash;
        // newBlock._hash = newBlock.calculateHash();
        newBlock.minBlock(this._difficulty);

        this._chain.push(newBlock);
    }

    isChainValid() {
        for (let index = 1; index < this._chain.length; index++) {
            const previousBlock = this._chain[index - 1];
            const currentBlock = this._chain[index];

            if (currentBlock._hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock._previousHash !== previousBlock._hash) {
                return false;
            }
        }

        return true;
    }
}
