import Block from "./block";
import BlockChain from "./block_chain";
import Transaction from "./transaction";
import { Log } from "./util";

const uCoin = new BlockChain();

uCoin.createTransaction(new Transaction("genesisAddress1", "user1Address", 9));
uCoin.createTransaction(new Transaction("genesisAddress1", "user2Address", 3));
uCoin.createTransaction(new Transaction("user1Address", "user2Address", 5));

uCoin.minePendingTransactions("user1Address");

// Log({ "log": `genesisAddress0 balance: ${uCoin.getBalanceOfAddress("genesisAddress0")}` });
// Log({ "log": `genesisAddress1 balance: ${uCoin.getBalanceOfAddress("genesisAddress1")}` });
// Log({ "log": `user1Address balance: ${uCoin.getBalanceOfAddress("user1Address")}` });
// Log({ "log": `user2Address balance: ${uCoin.getBalanceOfAddress("user2Address")}` });

uCoin.minePendingTransactions("genesisAddress0");
uCoin.createTransaction(new Transaction("user1Address", "user2Address", 2));
uCoin.minePendingTransactions("genesisAddress0");


Log({ "log": `genesisAddress0 balance: ${uCoin.getBalanceOfAddress("genesisAddress0")}` });
Log({ "log": `genesisAddress1 balance: ${uCoin.getBalanceOfAddress("genesisAddress1")}` });
Log({ "log": `user1Address balance: ${uCoin.getBalanceOfAddress("user1Address")}` });
Log({ "log": `user2Address balance: ${uCoin.getBalanceOfAddress("user2Address")}` });

// uCoin.addBlock(
//     new Block(new Date("2024-10-02T07:45:06.903Z"), [

//         new Transaction("genesisAddress1", "user2Address", 10),
//     ])
// );

// uCoin.addBlock(
//     new Block(new Date("2024-10-02T08:45:06.903Z"), [
//         new Transaction("user1Address", "user2Address", 2.5),
//         // new Transaction("genesisAddress1", "user2Address", 10),
//     ])
// );

// Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
// Log(uCoin);
// uCoin._chain[2]._data = { message: "huhu" };
// uCoin._chain[2]._hash = uCoin._chain[2].calculateHash();

// Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
Log(uCoin);


Log({ "log": `genesisAddress0 balance: ${uCoin.getBalanceOfAddress("genesisAddress0")}` });
Log({ "log": `genesisAddress1 balance: ${uCoin.getBalanceOfAddress("genesisAddress1")}` });
Log({ "log": `user1Address balance: ${uCoin.getBalanceOfAddress("user1Address")}` });
Log({ "log": `user2Address balance: ${uCoin.getBalanceOfAddress("user2Address")}` });
