import Block from "./block";
import Transaction from "./transaction";
import { GENESIS_WALLET, Log } from "./util";

export default class BlockChain {
    _chain: Block[];
    _pendingTransactions: Transaction[];
    _difficulty = 2;
    _miningReward = 0.005;

    constructor() {
        this._chain = [this.createGenesisBlock()];
        this._pendingTransactions = [];
    }

    createGenesisBlock() {
        const genesisBlock = new Block(
            new Date("2024-10-02T04:45:06.903Z"),
            // the data could have been anything
            [
                new Transaction(
                    GENESIS_WALLET.ADDR_1,
                    GENESIS_WALLET.ADDR_2,
                    100
                ),
            ],
            // new Transaction("A", "b", 0),
            "0"
        );

        genesisBlock.mineBlock(this._difficulty);

        return genesisBlock;
    }

    getLatestBlock() {
        return this._chain[this._chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress: string) {
        const miningRewardTransaction = new Transaction(
            GENESIS_WALLET.ADDR_1,
            miningRewardAddress,
            this._miningReward
        );

        this._pendingTransactions.push(miningRewardTransaction);

        const block = new Block(
            new Date(),
            this._pendingTransactions,
            this.getLatestBlock()._hash
        );

        block.mineBlock(this._difficulty);

        this._chain.push(block);

        this._pendingTransactions = [];
        Log({ minedBlock: `Block mined: ${block._hash}` });
    }

    addTransaction(transaction: Transaction) {
        if (!transaction._fromAddress || !transaction._toAddress) {
            throw new Error("Transaction must have to and from address");
        }

        if (!transaction.isValid()) {
            throw new Error("Can not add invalid transaction to chain");
        }

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
