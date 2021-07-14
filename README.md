# jTON contracts
![cover](docs/images/cover.svg)
Free TON contracts in [jTON](https://www.npmjs.com/package/jton) classes.

## Content table
* [jTON contracts](#jton-contracts)
    * [Content table](#content-table)
    * [Requirements](#requirements)
    * [Installation](#installation)
        * [yarn](#yarn)
        * [npm](#npm)
    * [Contracts](#contracts)
    * [Using](#using)

## Requirements
![requirements](docs/images/requirements.svg)
* [Node.js](https://nodejs.org) >= `16.x`
* [Yarn](https://classic.yarnpkg.com) >= `1.22.x`
* [Free TON Development Environment](https://github.com/tonlabs/tondev) >= `0.7.x`

## Installation
### yarn
```sh
yarn add jton-contracts
```

### npm
```sh
npm i jton-contracts
```

## Contracts
* tonlabs
    * [GiverV2](https://github.com/tonlabs/tonos-se/tree/master/contracts/giver_v2)
    * [SafeMultisigWallet](https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig)
    
## Using
**Example**
```ts
const giver: GiverV2 = new GiverV2(client, 30_000, GiverV2SeKeys)
await giver.sendTransaction({
    dest: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
    value: 10_000_000_000
})
```