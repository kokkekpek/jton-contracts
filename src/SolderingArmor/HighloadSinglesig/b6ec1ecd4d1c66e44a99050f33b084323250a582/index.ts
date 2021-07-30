import {Contract, ResultOfCall} from 'jton'
import {TonClient} from '@tonclient/core'
import {KeyPair} from '@tonclient/core/dist/modules'
import HighloadSinglesigContract from './source/bin/HighloadSinglesig'

export {HighloadSinglesigContract}

export interface SendTransactionIn {
    dest: string
    value: number | string
    bounce: boolean
    flags: number | string
    payload: string
}

export interface GetMessagesResult extends ResultOfCall {
    out: {
        messages: Message[]
    }
}

export interface Message {
    hash: string
    expireAt: string
}

export class HighloadSinglesig extends Contract {
    constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: HighloadSinglesigContract.abi,
            tvc: HighloadSinglesigContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }


    /**********
     * PUBLIC *
     **********/
    public async sendTransaction(input: SendTransactionIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('sendTransaction', input, keys)
    }

    public async getMessages(keys?: KeyPair): Promise<GetMessagesResult> {
        return await this.call('getMessages', {}, keys)
    }
}