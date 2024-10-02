import { HashWithSha256 } from "./util";

export default class Block<T> {
    _index: number;
    _previousHash: string;
    _timestamp: Date;
    _data: T;
    _hash: string;

    constructor(index: number, timestamp: Date, data: T, previousHash = "") {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._previousHash = previousHash;
        this._hash = this.calculateHash();
    }

    calculateHash() {
        return HashWithSha256(
            `${this._index}${this._previousHash}${
                this._timestamp
            }${JSON.stringify(this._data)}`
        );
    }
}
