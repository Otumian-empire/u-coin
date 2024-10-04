import BlockChain from "./block_chain";
import Transaction from "./transaction";
import { GENESIS_WALLET, GenerateKeyPair, Log } from "./util";

// generate get the private key
const myKeyPair = GenerateKeyPair();
const myWalletAddress = myKeyPair.getPublic("hex");

const yourKeyPair = GenerateKeyPair();
const yourWalletAddress = yourKeyPair.getPublic("hex");

const uCoin = new BlockChain();

uCoin.addTransaction(
    new Transaction(GENESIS_WALLET.ADDR_1, myWalletAddress, 9)
);
uCoin.addTransaction(
    new Transaction(GENESIS_WALLET.ADDR_1, yourWalletAddress, 10)
);

/* Log({
    log: `genesisAddress0 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `genesisAddress1 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `myBalance balance: ${uCoin.getBalanceOfAddress(myWalletAddress)}`,
});
Log({
    log: `yourBalance balance: ${uCoin.getBalanceOfAddress(yourWalletAddress)}`,
});
 */

uCoin.minePendingTransactions(myWalletAddress);
const trx = new Transaction(myWalletAddress, yourWalletAddress, 3);
trx.signTransaction(myKeyPair);
uCoin.addTransaction(trx);
// Log(uCoin);

/* Log({
    log: `genesisAddress0 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `genesisAddress1 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `myBalance balance: ${uCoin.getBalanceOfAddress(myWalletAddress)}`,
});
Log({
    log: `yourBalance balance: ${uCoin.getBalanceOfAddress(yourWalletAddress)}`,
}); */
// uCoin.addTransaction(new Transaction(myWalletAddress, yourWalletAddress, 2));
uCoin.minePendingTransactions(myWalletAddress);

/* Log({
    log: `genesisAddress0 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `genesisAddress1 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
});
Log({
    log: `myBalance balance: ${uCoin.getBalanceOfAddress(myWalletAddress)}`,
});
Log({
    log: `yourBalance balance: ${uCoin.getBalanceOfAddress(yourWalletAddress)}`,
}); */

// uCoin.addBlock(
//     new Block(new Date("2024-10-02T07:45:06.903Z"), [

//         new Transaction(GENESIS_WALLET.ADDR_1, yourWalletAddress, 10),
//     ])
// );

// uCoin.addBlock(
//     new Block(new Date("2024-10-02T08:45:06.903Z"), [
//         new Transaction(myWalletAddress, yourWalletAddress, 2.5),
//         // new Transaction(GENESIS_WALLET.ADDR_1, yourWalletAddress, 10),
//     ])
// );

// Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
// Log(uCoin);
uCoin.minePendingTransactions(myWalletAddress);
// add invalid transaction

/* 
const invalidTransaction = new Transaction(
    GENESIS_WALLET.ADDR_1,
    myWalletAddress,
    57
)
uCoin._chain[1].transactions[0] = invalidTransaction
// invalidTransaction
//     .signTransaction(myKeyPair);

uCoin._chain[1]._hash = uCoin._chain[1].calculateHash();
 */

/* uCoin._chain[1].transactions[0]._amount = 20;
// invalidTransaction
//     .signTransaction(myKeyPair);

uCoin._chain[1]._hash = uCoin._chain[1].calculateHash();
 */
Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });

// Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
// Log(uCoin);

// Log({
//     log: `genesisAddress0 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
// });
// Log({
//     log: `genesisAddress1 balance: ${uCoin.getBalanceOfAddress(GENESIS_WALLET.ADDR_1)}`,
// });
// Log({
//     log: `user1Address balance: ${uCoin.getBalanceOfAddress(myWalletAddress)}`,
// });
// Log({
//     log: `user2Address balance: ${uCoin.getBalanceOfAddress(yourWalletAddress)}`,
// });

Log(uCoin);
