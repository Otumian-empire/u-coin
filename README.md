# U-coin

U-coin is a replica from [Simply-explain's channel](https://www.youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4). I have been learning a lot about blockchain in general, from its finance, economic (tokenomic) and, regulations and policies, to staring [Bitcoin](https://github.com/bitcoin/bitcoin).

## Tools

-   [Typescript](https://www.typescriptlang.org/)
-   [Biome](https://github.com/biomejs/biome)
-   [vscode](https://code.visualstudio.com/)
-   [Simply-explain's - Building a blockchain with Javascript](https://www.youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4)

## Somme adjustment

-   mine the genesis block with the difficulty introduced in mind

## Some questions

-   In terms of attacking or takin over, the blockchain, can't we influence the last block added?
-   I observed that as the difficulty increases, the nonce also increased as well, can we use this to proportionally set the nonce based on the difficulty this way we can cut down on numerous invalid computations?

```js
const genesisBlock = new Block(
    0,
    new Date("2024-10-02T04:45:06.903Z"),
    // the data could have been anything
    { message: "This was supposed to be a joke 1" },
    "0"
);
```

| Difficulty | iterations |          t/ms          |
| :--------: | :--------: | :--------------------: |
|     0      |     1      | 0.00001892700046300888 |
|     1      |     14     |  0.00648310399800539   |
|     2      |     96     |  0.011996589995920659  |
|     3      |    636     | ~0.007566427998244763  |
|     4      |   18600    |  0.13897618500143288   |
|     5      |  1151284   |   6.987509167000652    |
|     6      |  25863102  |   151.50092688599975   |
|     7      |     -      |           -            |
