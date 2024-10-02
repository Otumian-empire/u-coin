import { HashWithSha256 } from "./util";

export default class Block<T> {
    _previousHash: string;
    _timestamp: Date;
    transactions: T[];
    _hash: string;
    _nonce: number;

    constructor(timestamp: Date, transactions: T[], previousHash = "") {
        this._timestamp = timestamp;
        this.transactions = transactions;
        this._previousHash = previousHash;
        this._hash = this.calculateHash();
        this._nonce = 0;
    }

    calculateHash() {
        return HashWithSha256(
            `${this._previousHash}${
                this._timestamp
            }${JSON.stringify(this.transactions)}${this._nonce}`
        );
    }

    minBlock(difficulty: number) {
        while (
            this._hash.substring(0, difficulty) !==
            Array(difficulty + 1).join("0")
        ) {
            this._nonce++;
            this._hash = this.calculateHash();
        }
    }
}
