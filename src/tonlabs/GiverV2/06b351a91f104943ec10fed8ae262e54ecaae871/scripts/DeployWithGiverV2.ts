import {KeyPair} from '@tonclient/core/dist/modules'
import {Contract, DeployWithGiver, ResultOfCall} from 'jton'
import {GiverV2} from '../'

export class DeployWithGiverV2 extends DeployWithGiver {
    /**
     * Creates and returns Giver.
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
    protected _getGiver(keys: KeyPair, timeout?: number): Contract {
        return new GiverV2(this._client, keys, timeout)
    }

    /**
     * Sends money from giver to target address before deploying.
     * @param giver
     * @param address
     * Example:
     *     '0:0000000000000000000000000000000000000000000000000000000000000000'
     * @param needSendToTarget
     * Example:
     *     1_000_000_000
     */
    protected async _send(giver: GiverV2, address: string, needSendToTarget: number): Promise<ResultOfCall> {
        return await giver.sendTransaction({
            dest: address,
            value: needSendToTarget
        })
    }
}