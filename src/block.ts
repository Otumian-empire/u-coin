import { HashWithSha256 } from "./util";

export default class Block<T> {
    _index: number;
    _previousHash: string;
    _timestamp: Date;
    _data: T;
    _hash: string;
    _nonce: number;

    constructor(index: number, timestamp: Date, data: T, previousHash = "") {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._previousHash = previousHash;
        this._hash = this.calculateHash();
        this._nonce = 0;
    }

    calculateHash() {
        return HashWithSha256(
            `${this._index}${this._previousHash}${
                this._timestamp
            }${JSON.stringify(this._data)}${this._nonce}`
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
