import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract, ZERO_ANSWER_ID} from 'jton'
import IdleContract from '../source/Idle'

export {IdleContract}

export class Idle extends Contract {
    constructor(client: TonClient, keys: KeyPair, address: string, timeout?: number) {
        super(client, {
            abi: IdleContract.abi,
            keys: keys,
            address: address
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async isIdle(): Promise<boolean> {
        return (await this.run('isIdle', ZERO_ANSWER_ID)).value.value0
    }
}