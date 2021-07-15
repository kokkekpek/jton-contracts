import {make} from 'jton'
import {root} from '../root'

make({
    root,
    compile: [
        'src/kokkekpek/Idle/contract/Idle'
    ],
    wrap: [
        'src/tonlabs/GiverV2/contract/GiverV2',
        'src/tonlabs/SafeMultisigWallet/contract/SafeMultisigWallet'
    ],
}).catch((e: any) => console.log(e))