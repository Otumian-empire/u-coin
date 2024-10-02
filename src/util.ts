import crypto from "node:crypto";

export function HashWithSha256(data: string) {
    return crypto.createHash("sha256").update(data).digest("hex").toString();
}

export function Log<T>(someRecord: T) {
    console.log(JSON.stringify(someRecord, null, 4));
}

export interface TransactionType {
    message: string;
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
