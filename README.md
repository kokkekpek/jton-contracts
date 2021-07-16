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
  * [Rules for contract versions](#rules-for-contract-versions)
  * [TODO](#todo)

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
* kokkekpek
  * [Idle](https://github.com/kokkekpek/jton-contracts/tree/master/src/kokkekpek/Idle/contract)
* tonlabs
  * [GiverV2](https://github.com/tonlabs/tonos-se/tree/master/contracts/giver_v2)
    * [2021-04-28T09:41:28Z](https://github.com/tonlabs/tonos-se/tree/8a2bc005cfec4ecd770d50b074179e525b76513b/contracts/giver_v2) `8a2bc005cfec4ecd770d50b074179e525b76513b`
  * [SafeMultisigWallet](https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig)
    * [2020-05-04T16:46:21Z](https://github.com/tonlabs/ton-labs-contracts/tree/8cb7be430819a2a83d72426f716756e156220ca6/solidity/safemultisig) `8cb7be430819a2a83d72426f716756e156220ca6`
  * [SetcodeMultisigWallet](https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/setcodemultisig)
    * [2020-11-19T11:36:30Z](https://github.com/tonlabs/ton-labs-contracts/tree/338ed7960ef14f2fcdd0726e405884dc7f43c66f/solidity/setcodemultisig)

## Using
**Example**
```ts
const giver: GiverV2 = new GiverV2(client, 30_000, GiverV2SeKeys)
await giver.sendTransaction({
    dest: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
    value: 10_000_000_000
})
```

## Rules for contract versions
* Link to contract in README must contain commit version
  * `... repo/tree/338ed7960ef14f2fcdd0726e405884dc7f43c66f/contracts` 👍
  * `... repo/tree/master/contracts` 👎
* All contract directory must contain time of commit in UTC.
  * `YYYY-MM-DDThh:mm:ssZ` format
    * `YYYY` year
    * `MM` month
    * `DD` day
    * `hh` hours
    * `mm` minutes.
    * `ss` seconds.
  * `2020-11-19T11:36:30Z` example
* `index.ts` in directory folder must `export` last worked version of contract.
```ts
export * from './2020-11-19T11:36:30Z'
``` 

## TODO
* Contracts update checker