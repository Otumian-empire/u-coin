import crypto from "node:crypto";

export function HashWithSha256(data: string) {
    return crypto.createHash("sha256").update(data).digest("hex").toString();
}

export function Log<T>(someRecord: T) {
    console.log(JSON.stringify(someRecord, null, 4));
}

export interface TransactionType {
    _fromAddress: string;
    _toAddress: string;
    _amount: number;
}

export interface BlockType<T> {
    index: number;
    timestamp: Date;
    data: T;
    previousHash: string;
}

export interface NewBlockType extends BlockType<TransactionType> {
    hash: string;
}
