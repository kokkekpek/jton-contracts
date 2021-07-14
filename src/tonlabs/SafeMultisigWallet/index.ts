import SafeMultisigWalletContract from './contract/SafeMultisigWallet'
import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import {Contract, ResultOfCall} from 'jton'

export interface DeployIn {
    owners: string[] | number[],
    reqConfirms: number
}

export interface SendTransactionIn {
    dest: string
    value: number
    bounce: boolean
    flags: number
    payload: string
}

export interface SubmitTransactionIn {
    dest: string
    value: number
    bounce: boolean
    allBalance: boolean
    payload: string
}

export interface SubmitTransactionResult extends ResultOfCall {
    out: SubmitTransactionOut
}

export interface SubmitTransactionOut extends ResultOfCall {
    transId: string
}

export interface ConfirmTransactionIn {
    transactionId: string
}

/**
 * @see https://github.com/tonlabs/ton-labs-contracts/tree/master/solidity/safemultisig
 */
export class SafeMultisigWallet extends Contract {
    public static readonly EXTERNAL = {
        acceptTransfer: 'acceptTransfer'
    }

    constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: SafeMultisigWalletContract.abi,
            tvc: SafeMultisigWalletContract.tvc,
            initialData: {},
            keys: keys
        })
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(input: DeployIn): Promise<boolean> {
        return await super.deploy(input)
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

    public async submitTransactionWithComment(
        dest: string,
        value: number,
        bounce: boolean,
        allBalance: boolean,
        comment: string,
        keys?: KeyPair
    ): Promise<SubmitTransactionResult> {
        const payload: string = await this._getPayloadToTransferWithComment(comment)
        return await this.submitTransaction({
                dest,
                value,
                bounce,
                allBalance,
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

    public async submitTransaction(input: SubmitTransactionIn, keys?: KeyPair): Promise<SubmitTransactionResult> {
        return await this.call('submitTransaction', input, keys)
    }

    public async confirmTransaction(input: ConfirmTransactionIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('confirmTransaction', input, keys)
    }
}