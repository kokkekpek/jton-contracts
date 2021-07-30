import {KeyPair} from '@tonclient/core/dist/modules'
import {Contract, Info} from 'jton'
import {SetcodeMultisigWallet} from '../'

export class SetcodeMultisigWalletInfo extends Info {
    /**
     * Creates and returns contract.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     * @param timeout Time in milliseconds. How much time need wait a collection from graphql.
     * Examples:
     *     3000
     *     5000
     */
    protected _getContract(keys: KeyPair, timeout?: number): Contract {
        return new SetcodeMultisigWallet(this._client, keys, timeout)
    }
}