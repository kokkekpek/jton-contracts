import {KeyPair} from '@tonclient/core/dist/modules'
import {Call, CallConfig, Contract, readBoolean, readInt, StringMap} from 'jton'
import {GiverV2} from '../'

enum PARAMETERS {
    ADDRESS = 'address',
    VALUE = 'value',
    BOUNCE = 'bounce'
}

export class GiverV2Send extends Call {
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
     * Create and return contract object.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     */
    protected _getContract(keys: KeyPair): Contract {
        return new GiverV2(this._client, this._config.net.timeout, keys)
    }

    /**
     * Create and return target contract object.
     * @param map
     * Example:
     *     {
     *         address: '0:0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff'
     *     }
     */
    protected _getTargetContract(map: StringMap): Contract {
        return new Contract(this._client, this._config.net.timeout, {
            abi: {},
            address: map[PARAMETERS.ADDRESS]
        })
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
    protected async _call(contract: GiverV2, map: StringMap, keys: KeyPair): Promise<void> {
        const address: string = map[PARAMETERS.ADDRESS]
        const value: number = readInt(map[PARAMETERS.VALUE])
        const bounce: boolean = readBoolean(map[PARAMETERS.BOUNCE])
        await contract.sendTransaction({
            dest: address,
            value: value,
            bounce: bounce
        }, keys)
    }
}