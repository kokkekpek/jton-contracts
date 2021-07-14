import {make} from 'jton'
import {root} from '../root'

make({
    root,
    wrap: [
        'src/tonlabs/GiverV2/contract/GiverV2',
        'src/tonlabs/SafeMultisigWallet/contract/SafeMultisigWallet'
    ]
})