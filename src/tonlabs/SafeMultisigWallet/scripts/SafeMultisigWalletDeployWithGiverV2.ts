import {KeyPair} from '@tonclient/core/dist/modules'
import {DeployWithGiverV2} from '../../GiverV2/scripts/DeployWithGiverV2'
import {Contract, x0} from 'jton'
import {SafeMultisigWallet} from '../'

export class SafeMultisigWalletDeployWithGiverV2 extends DeployWithGiverV2 {
    private _keys: KeyPair = {
        public: '',
        secret: ''
    }

    /**
     * Create and return contract object.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     */
    protected _getContract(keys: KeyPair): Contract {
        this._keys = keys
        return new SafeMultisigWallet(this._client, this._config.net.timeout, keys)
    }

    /**
     * Deploy contract.
     * @param contract
     */
    protected async _deploy(contract: SafeMultisigWallet): Promise<boolean> {
        return await contract.deploy({
            owners: [x0(this._keys.public)],
            reqConfirms: 1
        })
    }
}