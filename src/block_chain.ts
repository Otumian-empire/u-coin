import Block from "./block";
import Transaction from "./transaction";
import { Log } from "./util";

export default class BlockChain {
    _chain: Block<Transaction>[];
    _pendingTransactions: Transaction[];
    _difficulty = 2;
    _miningReward = 0.005;

    constructor() {
        this._chain = [this.createGenesisBlock()];
        this._pendingTransactions = [];
    }

    createGenesisBlock() {
        const genesisBlock = new Block<Transaction>(
            new Date("2024-10-02T04:45:06.903Z"),
            // the data could have been anything
            [new Transaction("genesisAddress0", "genesisAddress1", 100)],
            // new Transaction("A", "b", 0),
            "0"
        );

        genesisBlock.minBlock(this._difficulty);

        return genesisBlock;
    }

    getLatestBlock() {
        return this._chain[this._chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress: string) {
        let block = new Block<Transaction>(
            new Date(),
            this._pendingTransactions
        );

        block.minBlock(this._difficulty);

        Log({ log: `Block mined: ${block._hash}` });

        this._chain.push(block);

        this._pendingTransactions = [
            new Transaction("genesisAddress1", miningRewardAddress, this._miningReward),
        ];
    }

    createTransaction(transaction: Transaction) {
        this._pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address: string) {
        let balance = 0;

        for (const block of this._chain) {
            for (const transaction of block.transactions) {
                if (transaction._fromAddress === address) {
                    balance -= transaction._amount;
                } else if (transaction._toAddress === address) {
                    balance += transaction._amount;
                }
            }
        }

        return balance;
    }

    addBlock(newBlock: Block<Transaction>) {
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
