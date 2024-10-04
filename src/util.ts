import crypto from "node:crypto";
import { ec } from "elliptic";
const elliptic = new ec("secp256k1");

export function HashWithSha256(data: string) {
    return crypto.createHash("sha256").update(data).digest("hex").toString();
}

export function Log<T>(someRecord: T) {
    console.log(JSON.stringify(someRecord, null, 4));
}

export function GenerateKeyPair() {
    return elliptic.genKeyPair();
}

export function SignData(privateKey: string, data: string) {
    const sign = crypto.createSign("SHA256");
    sign.update(data);

    return sign.sign(privateKey, "base64");
}

export function VerifySignature(
    publicKey: string,
    data: string,
    signature: string
) {
    const verify = crypto.createVerify("SHA256");
    verify.update(data);

    return verify.verify(publicKey, signature, "base64");
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

export type KeyPair = ec.KeyPair;

export function getPublicKey(fromWallet: string) {
    return elliptic.keyFromPublic(fromWallet, "hex");
}

export const GENESIS_WALLET = {
    ADDR_1: "genesisAddress1",
    ADDR_2: "genesisAddress2",
};
