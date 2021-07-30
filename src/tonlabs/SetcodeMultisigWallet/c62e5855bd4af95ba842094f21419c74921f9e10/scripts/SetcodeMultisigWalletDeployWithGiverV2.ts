import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {Contract, DeployWithGiverConfig} from 'jton'
import {DeployIn, SetcodeMultisigWallet} from '../'
import {DeployWithGiverV2} from '../../../GiverV2'

export class SetcodeMultisigWalletDeployWithGiverV2 extends DeployWithGiverV2 {
    /**
     * @param _config
     * @param _parameters
     */
    constructor(protected readonly _config: DeployWithGiverConfig, private readonly _parameters: DeployIn) {
        super(_config)
    }

    /**
     * Creates and returns contract.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     * @param timeout Time in milliseconds. How much time need wait a collection from graphql.
     * Examples:
     *     3000
     *     5000
     */
    protected _getContract(keys: KeyPair, timeout?: number): Contract {
        return new SetcodeMultisigWallet(this._client, keys, timeout)
    }

    /**
     * Deploys contract.
     * @param contract
     * @param timeout Time in milliseconds. How much time need wait a collection from graphql.
     * Examples:
     *     3000
     *     5000
     */
    protected async _deploy(contract: Contract, timeout?: number): Promise<ResultOfProcessMessage> {
        return await contract.deploy(this._parameters, timeout)
    }
}