export default class Transaction {
    _fromAddress: string;
    _toAddress: string;
    _amount: number;

    constructor(fromAddress: string, toAddress: string, amount: number) {
        this._fromAddress = fromAddress;
        this._toAddress = toAddress;
        this._amount = amount;
    }
}
