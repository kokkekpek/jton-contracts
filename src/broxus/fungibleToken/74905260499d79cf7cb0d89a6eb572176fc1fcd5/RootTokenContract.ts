import {Contract, ResultOfCall, ZERO_ANSWER_ID} from 'jton'
import {ResultOfProcessMessage, TonClient} from '@tonclient/core'
import {KeyPair} from '@tonclient/core/dist/modules'
import RootTokenContractContract from './contracts/RootTokenContract'

export {RootTokenContractContract}

export interface InitialData {
    _randomNonce: number | string
    name: string
    symbol: string
    decimals: number | string
    wallet_code: string
}

export interface DeployIn {
    root_public_key_: number | string
    root_owner_address_: string
}

export interface GetDetailsOut {
    name: string
    symbol: string
    decimals: string
    root_public_key: string
    root_owner_address: string
    total_supply: string
}

export interface GetWalletAddressIn {
    wallet_public_key_: string,
    owner_address_: string
}

export interface DeployWalletIn {
    tokens: number | string
    deploy_grams: number | string
    wallet_public_key_: string
    owner_address_: string
    gas_back_address: string
}

export interface DeployWalletResult extends ResultOfCall {
    out: DeployWalletOut
}

export interface DeployWalletOut {
    value0: string
}

export interface MintIn {
    tokens: number | string
    to: string
}

export interface SetPausedIn {
    value: boolean
}

export interface TransferOwnerIn {
    root_public_key_: number | string
    root_owner_address_: string
}

export class RootTokenContract extends Contract {
    public static readonly EXTERNAL = {
        getVersion: 'getVersion',
        getDetails: 'getDetails',
        getTotalSupply: 'getTotalSupply',
        getWalletCode: 'getWalletCode',
        getWalletAddress: 'getWalletAddress',
        sendExpectedWalletAddress: 'sendExpectedWalletAddress',
        deployWallet: 'deployWallet',
        deployEmptyWallet: 'deployEmptyWallet',
        mint: 'mint',
        proxyBurn: 'proxyBurn',
        tokensBurned: 'tokensBurned',
        sendSurplusGas: 'sendSurplusGas',
        setPaused: 'setPaused',
        sendPausedCallbackTo: 'sendPausedCallbackTo',
        transferOwner: 'transferOwner'
    }

    constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: RootTokenContractContract.abi,
            tvc: RootTokenContractContract.tvc,
            initialData: initialData,
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
    public async deployWallet(input: DeployWalletIn, keys?: KeyPair): Promise<DeployWalletResult> {
        return await this.call('deployWallet', input, keys)
    }

    public async mint(input: MintIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('mint', input, keys)
    }

    public async setPaused(input: SetPausedIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('setPaused', input, keys)
    }

    public async transferOwner(input: TransferOwnerIn, keys?: KeyPair): Promise<ResultOfCall> {
        return await this.call('transferOwner', input, keys)
    }


    /***********
     * GETTERS *
     ***********/
    public async getVersion(): Promise<string>{
        return (await this.run('getVersion', ZERO_ANSWER_ID)).value.value0
    }

    public async getDetails(): Promise<GetDetailsOut> {
        return (await this.run('getDetails', ZERO_ANSWER_ID)).value.value0
    }

    public async getTotalSupply(): Promise<string> {
        return (await this.run('getTotalSupply', ZERO_ANSWER_ID)).value.value0
    }

    public async getWalletCode(): Promise<string> {
        return (await this.run('getWalletCode', ZERO_ANSWER_ID)).value.value0
    }

    public async getWalletAddress(input: GetWalletAddressIn): Promise<string> {
        return (await this.run('getWalletAddress', {...input, ...ZERO_ANSWER_ID})).value.value0
    }
}