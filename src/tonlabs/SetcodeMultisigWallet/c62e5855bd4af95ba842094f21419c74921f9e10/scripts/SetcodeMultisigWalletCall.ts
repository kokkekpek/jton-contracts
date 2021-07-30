import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import {Call, CallConfig, Contract, getPayload, readAbi, readBoolean, readInt, readJson, StringMap} from 'jton'
import {SetcodeMultisigWallet} from '../'

export enum PARAMETERS {
    DEST = 'dest',
    VALUE = 'value',
    BOUNCE = 'bounce',
    FLAGS = 'flags',
    PATH_TO_ABI = 'pathToAbiFile',
    METHOD = 'method',
    PARAMETERS = 'parameters'
}

export class SetcodeMultisigWalletCall extends Call {
    /**
     * @param config
     * Example:
     *     {
     *         net: {
     *             url: 'http://localhost',
     *             timeout: 30_000
     *         },
     *         locale: 'EN',
     *         keys: `${__dirname}/../library/keys/GiverV2.se.keys.json`
     *     }
     */
    constructor(config: CallConfig) {
        super(config, Object.values(PARAMETERS))
    }

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

    /**
     * Create and return target contract object.
     * @param map
     * Example:
     *     {
     *         address: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff'
     *     }
     * @param timeout Time in milliseconds. How much time need wait a collection from graphql.
     * Examples:
     *     3000
     *     5000
     */
    protected _getTargetContract(map: StringMap, timeout?: number): Contract {
        return new Contract(this._client, {
            abi: {},
            address: map[PARAMETERS.DEST]
        }, timeout)
    }

    /**
     * Call the public method with an external message.
     * @param contract A contract on which we call the public method with an external message.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     * @param map
     * Example:
     *     {
     *         address: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff ',
     *         value: '1_000_000_000',
     *         bounce: 'false'
     *     }
     */
    protected async _call(contract: SetcodeMultisigWallet, map: StringMap, keys: KeyPair): Promise<void> {
        const dest: string = map[PARAMETERS.DEST]
        const value: number = readInt(map[PARAMETERS.VALUE])
        const bounce: boolean = readBoolean(map[PARAMETERS.BOUNCE])
        const flags: number = readInt(map[PARAMETERS.FLAGS])
        const abi: AbiContract = readAbi(map[PARAMETERS.PATH_TO_ABI])
        const method: string = map[PARAMETERS.METHOD]
        const input: Object = readJson(map[PARAMETERS.PARAMETERS])
        await contract.sendTransaction({
            dest,
            value,
            bounce,
            flags,
            payload: await getPayload(this._client, abi, method, input)
        }, keys)
    }
}