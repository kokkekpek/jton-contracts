import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract} from 'jton'
import IdleContract from './source/Idle'

export {IdleContract}

export interface GetIdleOut {
    idle: boolean
}

export class Idle extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair, address: string) {
        super(client, timeout, {
            abi: IdleContract.abi,
            keys: keys,
            address: address
        })
    }


    /***********
     * GETTERS *
     ***********/
    public async isIdle(): Promise<GetIdleOut> {
        return (await this.run('isIdle')).value
    }
}