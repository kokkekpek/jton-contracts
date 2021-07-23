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
  * [Example](#example)
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
* broxus
  * fungibleToken
    * source
      * **RootTokenContract**
        * [sol](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/contracts/RootTokenContract.sol)
        * [abi](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/build/RootTokenContract.abi.json)
        * [tvc](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/build/RootTokenContract.tvc)
      * **TONTokenWallet**
        * [sol](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/contracts/TONTokenWallet.sol)
        * [abi](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/build/TONTokenWallet.abi.json)
        * [tvc](https://github.com/broxus/ton-eth-bridge-token-contracts/blob/master/free-ton/build/TONTokenWallet.tvc)
      * **include**
        * [interfaces/*.sol](https://github.com/broxus/ton-eth-bridge-token-contracts/tree/master/free-ton/contracts/interfaces)
        * [libraries/*.sol](https://github.com/broxus/ton-eth-bridge-token-contracts/tree/master/free-ton/contracts/libraries)
    * commits
      * `74905260499d79cf7cb0d89a6eb572176fc1fcd5` - 2021-05-18T16:00:52Z
* kokkekpek
  * **Idle**
    * source
      * [sol](https://github.com/kokkekpek/jton-contracts/blob/master/src/kokkekpek/Idle/source/Idle.sol)
      * [abi](https://github.com/kokkekpek/jton-contracts/blob/master/src/kokkekpek/Idle/source/Idle.abi.json)
      * [tvc](https://github.com/kokkekpek/jton-contracts/blob/master/src/kokkekpek/Idle/source/Idle.tvc)
    * **include**
      * [interfaces/*.sol](https://github.com/kokkekpek/jton-contracts/blob/master/src/kokkekpek/Idle/source/interfaces)
    * commits
      * `b911fc8f70d58477d53bf514e693bf76f96efd25` - 2021-07-22T05:17:01Z
      * `7504e7f94fe085f7c14c3800093ee1a9f5e2d3e2` - 2021-07-23T06:13:09Z **✔**
* tonlabs
  * **GiverV2**
    * source
      * [sol](https://github.com/tonlabs/tonos-se/blob/master/contracts/giver_v2/GiverV2.sol)
      * [abi](https://github.com/tonlabs/tonos-se/blob/master/contracts/giver_v2/GiverV2.abi.json)
      * [tvc](https://github.com/tonlabs/tonos-se/blob/master/contracts/giver_v2/GiverV2.tvc)
      * [keys](https://github.com/tonlabs/tonos-se/blob/master/contracts/giver_v2/GiverV2.keys.json)
    * commits
      * `8a2bc005cfec4ecd770d50b074179e525b76513b` - 2021-04-28T09:41:28Z **✔**
      * `06b351a91f104943ec10fed8ae262e54ecaae871` - 2021-07-13T16:54:19Z
  * **SafeMultisigWallet**
    * source
      * [sol](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/safemultisig/SafeMultisigWallet.sol)
      * [abi](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/safemultisig/SafeMultisigWallet.abi.json)
      * [tvc](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/safemultisig/SafeMultisigWallet.tvc)
    * commits
      * `5ee039e4d093b91b6fdf7d77b9627e2e7d37f000` - 2020-05-04T16:46:21Z
  * SetcodeMultisigWallet
    * source
      * [sol](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/setcodemultisig/SetcodeMultisigWallet.sol)
      * [abi](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/setcodemultisig/SetcodeMultisigWallet.abi.json)
      * [tvc](https://github.com/tonlabs/ton-labs-contracts/blob/master/solidity/setcodemultisig/SetcodeMultisigWallet.tvc)
    * commits
      * `c62e5855bd4af95ba842094f21419c74921f9e10` - 2020-05-07T08:58:05Z

## Example
```ts
import {GiverV2, GiverV2SeKeys} from 'jton-contracts/dist/tonlabs/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import {createClient} from 'jton/src/utils/index'

async function run(): Promise<void> {
  TonClient.useBinaryLibrary(libNode)
  const client: TonClient = createClient('http://localhost:8080')
  const giverV2: GiverV2 = new GiverV2(client, 30_000, GiverV2SeKeys)
  await giverV2.sendTransaction({
    dest: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
    value: 10_000_000_000
  })
}
run().then().catch(e => console.log(e))
```

## TODO
* Automate checking and downloading the latest versions of contracts from other repositories
* Automate contract wrapping
* Docs