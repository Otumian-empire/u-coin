import Block from "./block";
import BlockChain from "./block_chain";
import { Log } from "./util";

const uCoin = new BlockChain();

uCoin.addBlock(
    new Block(1, new Date("2024-10-02T07:45:06.903Z"), {
        message: "Another data 2",
    })
);

uCoin.addBlock(
    new Block(2, new Date("2024-10-02T08:45:06.903Z"), {
        message: "Another data 3",
    })
);

/* Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
Log(uCoin)
uCoin._chain[2]._data = { message: "huhu" }
uCoin._chain[2]._hash = uCoin._chain[2].calculateHash()

Log({ log: `uCoin chain is ${uCoin.isChainValid() ? "valid" : "invalid"}` });
Log(uCoin) */
