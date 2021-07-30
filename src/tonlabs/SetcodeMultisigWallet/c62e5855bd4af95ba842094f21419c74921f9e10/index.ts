import SetcodeMultisigWalletContract from './contract/SetcodeMultisigWallet'
import {ResultOfProcessMessage, TonClient} from '@tonclient/core'
import {KeyPair} from '@tonclient/core/dist/modules'
import {Contract, ResultOfCall} from 'jton'

export * from './scripts'
export {SetcodeMultisigWalletContract}

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

export interface SubmitUpdateIn {
    codeHash: string
    owners: string[]
    reqConfirms: number | string
}

export interface SubmitUpdateResult {
    out: SubmitUpdateOut
}

export interface SubmitUpdateOut {
    updateId: string
}

export interface ConfirmUpdateIn {
    updateId: number | string
}

export interface ExecuteUpdateIn {
    updateId: number | string
    code: string
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

export interface UpdateRequest {
    id: string
    index: string
    signs: string
    confirmationsMask: string
    creator: string
    codeHash: string
    custodians: string[]
    reqConfirms: string
}

export class SetcodeMultisigWallet extends Contract {
    public static readonly EXTERNAL = {
        acceptTransfer: 'acceptTransfer'
    }

    constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: SetcodeMultisigWalletContract.abi,
            tvc: SetcodeMultisigWalletContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(input: DeployIn, timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(input, timeout)
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

    public async submitUpdate(input: SubmitUpdateIn, keys?: KeyPair): Promise<SubmitUpdateResult> {
        return await this.call('submitUpdate', input, keys)
    }

    public async confirmUpdate(input: ConfirmUpdateIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('confirmUpdate', input, keys)
    }

    public async executeUpdate(input: ExecuteUpdateIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('executeUpdate', input, keys)
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

    public async getUpdateRequests(): Promise<UpdateRequest[]> {
        return (await this.run('getUpdateRequests')).value.updates
    }
}