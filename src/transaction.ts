import {
    GENESIS_WALLET,
    HashWithSha256,
    type KeyPair,
    getPublicKey,
} from "./util";

export default class Transaction {
    _fromAddress: string;
    _toAddress: string;
    _amount: number;
    _signature: string;

    constructor(fromAddress: string, toAddress: string, amount: number) {
        this._fromAddress = fromAddress;
        this._toAddress = toAddress;
        this._amount = amount;
    }

    calculateHash() {
        return HashWithSha256(
            `${this._fromAddress}${this._toAddress}${this._amount}`
        );
    }

    signTransaction(keyPair: KeyPair) {
        if (keyPair.getPublic("hex") !== this._fromAddress) {
            throw new Error("You can not sign transactions for other wallets");
        }

        const transactionHash = this.calculateHash();

        this._signature = keyPair.sign(transactionHash, "base64").toDER("hex");
    }

    isValid() {
        const genesisWallets = [GENESIS_WALLET.ADDR_1, GENESIS_WALLET.ADDR_2];

        if (genesisWallets.includes(this._fromAddress)) {
            return true;
        }

        if (!this._signature || this._signature.length === 0) {
            return false;
            // throw new Error("No signature in this transaction");
        }

        const publicKey = getPublicKey(this._fromAddress);
        return publicKey.verify(this.calculateHash(), this._signature);
    }
}
