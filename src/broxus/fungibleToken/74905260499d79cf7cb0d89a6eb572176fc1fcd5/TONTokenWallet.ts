import {Contract, ResultOfCall, ZERO_ANSWER_ID} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import TONTokenWalletContract from './source/build/TONTokenWallet'

export {TONTokenWalletContract}

export interface InitialData {
    root_address: string
    code: string
    wallet_public_key: number | string
    owner_address: string
}

export interface GetDetailsOut {
    root_address: string
    wallet_public_key: string
    owner_address: string
    balance: string
    receive_callback: string
    bounced_callback: string
    allow_non_notifiable: boolean
}

export interface AllowanceInfo {
    remaining_tokens: string
    spender: string
}

export interface ApproveIn {
    spender: string
    remaining_tokens: number | string
    tokens: number | string
}

export interface TransferToRecipientIn {
    recipient_public_key: number | string
    recipient_address: string
    tokens: number | string
    deploy_grams: number | string
    transfer_grams: number | string
    send_gas_to: string
    notify_receiver: boolean
    payload: string
}

export interface TransferIn {
    to: string
    tokens: number | string
    grams: number | string
    send_gas_to: string
    notify_receiver: boolean
    payload: string
}

export interface TransferFromIn {
    from: string
    to: string
    tokens: number | string
    grams: number | string
    send_gas_to: string
    notify_receiver: boolean
    payload: string
}

export interface BurnByOwnerIn {
    tokens: number | string
    grams: number | string
    send_gas_to: string
    callback_address: string
    callback_payload: string
}

export interface SetReceiveCallbackIn {
    receive_callback_: string
    allow_non_notifiable_: boolean
}

export interface SetBouncedCallbackIn {
    bounced_callback_: string
}
export interface DestroyIn {
    gas_dest: string
}

export class TONTokenWallet extends Contract {
    public static readonly EXTERNAL = {
        getVersion: 'getVersion',
        balance: 'balance',
        getDetails: 'getDetails',
        getWalletCode: 'getWalletCode',
        allowance: 'allowance',
        approve: 'approve',
        disapprove: 'disapprove',
        transferToRecipient: 'transferToRecipient',
        transfer: 'transfer',
        transferFrom: 'transferFrom',
        internalTransfer: 'internalTransfer',
        internalTransferFrom: 'internalTransferFrom',
        burnByOwner: 'burnByOwner',
        burnByRoot: 'burnByRoot',
        setReceiveCallback: 'setReceiveCallback',
        setBouncedCallback: 'setBouncedCallback',
        destroy: 'destroy'
    }

    constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: TONTokenWalletContract.abi,
            tvc: TONTokenWalletContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /**********
     * PUBLIC *
     **********/
    public async approve(input: ApproveIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('approve', input, keys)
    }

    public async disapprove(keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('disapprove', {}, keys)
    }

    public async transferToRecipient(input: TransferToRecipientIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('transferToRecipient', input, keys)
    }

    public async transfer(input: TransferIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('transfer', input, keys)
    }

    public async transferFrom(input: TransferFromIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('transferFrom', input, keys)
    }

    public async burnByOwner(input: BurnByOwnerIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('burnByOwner', input, keys)
    }

    public async setReceiveCallback(input: SetReceiveCallbackIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('setReceiveCallback', input, keys)
    }

    public async setBouncedCallback(input: SetBouncedCallbackIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('setBouncedCallback', input, keys)
    }

    public async destroy(input: DestroyIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('destroy', input, keys)
    }


    /***********
     * GETTERS *
     ***********/
    public async getVersion(): Promise<string>{
        return (await this.run('getVersion', ZERO_ANSWER_ID)).value.value0
    }

    public async balance(): Promise<string> {
        return (await this.run('balance', ZERO_ANSWER_ID)).value.value0
    }

    public async getDetails(): Promise<GetDetailsOut> {
        return (await this.run('getDetails', ZERO_ANSWER_ID)).value.value0
    }

    public async getWalletCode(): Promise<string> {
        return (await this.run('getWalletCode', ZERO_ANSWER_ID)).value.value0
    }

    public async allowance(): Promise<AllowanceInfo> {
        return (await this.run('allowance', ZERO_ANSWER_ID)).value.value0
    }
}