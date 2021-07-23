import SafeMultisigWalletContract from './contract/SafeMultisigWallet'
import {ResultOfProcessMessage, TonClient} from '@tonclient/core'
import {AbiContract, KeyPair} from '@tonclient/core/dist/modules'
import {Contract, ResultOfCall} from 'jton'

export * from './scripts'
export {SafeMultisigWalletContract}

export interface DeployIn {
    owners: number[] | string[],
    reqConfirms: number | string
}

export interface SendTransactionIn {
    dest: string
    value: number | string
    bounce: boolean
    flags: number | string
    payload: string
}

export interface SubmitTransactionIn {
    dest: string
    value: number | string
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
    transactionId: number | string
}

export interface IsConfirmedIn {
    mask: number | string
    index: number | string
}

export interface GetParametersOut {
    maxQueuedTransactions: string,
    maxCustodianCount: string,
    expirationTime: string,
    minValue: string,
    requiredTxnConfirms: string
}

export interface GetTransactionIn {
    transactionId: number | string
}

export interface Transaction {
    id: string
    confirmationsMask: string
    signsRequired: string
    signsReceived: string
    creator: string
    index: string
    dest: string
    value: string
    sendFlags: string
    payload: string
    bounce: boolean
}

export interface Custodian {
    index: string
    pubkey: string
}

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
    public async deploy(input: DeployIn, timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(input, timeout)
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


    /***********
     * GETTERS *
     ***********/
    public async isConfirmed(input: IsConfirmedIn): Promise<boolean> {
        return (await this.run('isConfirmed', input)).value.confirmed
    }

    public async getParameters(): Promise<GetParametersOut> {
        return (await this.run('getParameters')).value
    }

    public async getTransaction(input: GetTransactionIn): Promise<Transaction> {
        return (await this.run('getTransaction', input)).value.trans
    }

    public async getTransactions(): Promise<Transaction[]> {
        return (await this.run('getTransactions')).value.transactions
    }

    public async getTransactionIds(): Promise<string[]> {
        return (await this.run('getTransactionIds')).value.ids
    }

    public async getCustodians(): Promise<Custodian[]> {
        return (await this.run('getCustodians')).value.custodians
    }
}