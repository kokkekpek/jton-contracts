import {make} from 'jton'
import {root} from '../root'

make({
    root,
    compile: [
        'src/kokkekpek/Idle/contract/Idle'
    ],
    wrap: [
        'src/tonlabs/GiverV2/2021-04-28T09:41:28Z/contract/GiverV2',
        'src/tonlabs/SafeMultisigWallet/2020-05-04T16:46:21Z/contract/SafeMultisigWallet',
        'src/tonlabs/SetcodeMultisigWallet/2020-11-19T11:36:30Z/contract/SetcodeMultisigWallet'
    ],
    compiler: '0.47.0',
    linker: '0.11.84',
    stdlib: '0.47.0'
}).catch((e: any) => console.log(e))