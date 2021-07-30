import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract} from 'jton'
import IdleContract from './source/Idle'

export {IdleContract}

export interface GetIdleOut {
    idle: boolean
}

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
    public async isIdle(): Promise<GetIdleOut> {
        return (await this.run('isIdle')).value
    }
}