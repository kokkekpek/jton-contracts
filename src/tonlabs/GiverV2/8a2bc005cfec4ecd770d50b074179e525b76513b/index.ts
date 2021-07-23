import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract, ResultOfCall} from 'jton'
import GiverV2Contract from './contract/GiverV2'
import GiverV2SeKeys from './contract/GiverV2.se.keys.json'

export * from './scripts'
export * from './utils'
export {GiverV2Contract}
export {GiverV2SeKeys}

export interface SendTransactionIn {
    dest: string
    value: number | string
    bounce?: boolean
}

export interface UpgradeIn {
    code: string
}

export interface GetMessagesResult extends ResultOfCall {
    out: GetMessagesOut[]
}

export interface GetMessagesOut {
    hash: string
    expireAt: string
}

/**
 * @see https://github.com/tonlabs/tonos-se/tree/master/contracts/giver_v2
 */
export class GiverV2 extends Contract {
    constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: GiverV2Contract.abi,
            initialData: {},
            keys: keys,
            tvc: GiverV2Contract.tvc
        })
    }


    /**********
     * PUBLIC *
     **********/
    public async sendTransaction(input: SendTransactionIn, keys?: KeyPair): Promise<ResultOfCall> {
        input.bounce = input.bounce ?? false
        return this.call('sendTransaction', input, keys)
    }

    public async upgrade(input: UpgradeIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('upgrade', input, keys)
    }

    public async getMessages(keys?: KeyPair): Promise<GetMessagesResult> {
        return await this.call('getMessages', {}, keys)
    }
}