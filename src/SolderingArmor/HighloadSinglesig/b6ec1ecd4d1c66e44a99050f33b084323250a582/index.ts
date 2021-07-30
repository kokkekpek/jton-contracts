import {Contract, ResultOfCall} from 'jton'
import {TonClient} from '@tonclient/core'
import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import HighloadSinglesigContract from './contracts/contracts/HighloadSinglesig'

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
    constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: HighloadSinglesigContract.abi,
            tvc: HighloadSinglesigContract.tvc,
            initialData: {},
            keys: keys
        })
    }


    /**************
     * DECORATORS *
     **************/
    public async callAnotherContract(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        abi: AbiContract,
        method: string,
        input: Object,
        keys?: KeyPair
    ): Promise<ResultOfCall> {
        const payload: string = await this._getPayloadToCallAnotherContract(abi, method, input)
        return await this.sendTransaction(
            {
                dest,
                value,
                bounce,
                flags,
                payload
            },
            keys
        )
    }

    public async sendTransactionWithComment(
        dest: string,
        value: number,
        bounce: boolean,
        flags: number,
        comment: string,
        keys?: KeyPair
    ): Promise<ResultOfCall> {
        const payload: string = await this._getPayloadToTransferWithComment(comment)
        return await this.sendTransaction({
                dest,
                value,
                bounce,
                flags,
                payload
            },
            keys
        )
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