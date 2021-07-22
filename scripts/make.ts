import {make} from 'jton'
import {root} from '../root'

make({
    root,
    compile: [
        'src/kokkekpek/Idle/source/Idle'
    ],
    wrap: [
        'src/kokkekpek/Idle/b911fc8f70d58477d53bf514e693bf76f96efd25/contract/Idle',
        'src/tonlabs/GiverV2/8a2bc005cfec4ecd770d50b074179e525b76513b/contract/GiverV2',
        'src/tonlabs/GiverV2/06b351a91f104943ec10fed8ae262e54ecaae871/contract/GiverV2',
        'src/tonlabs/SafeMultisigWallet/5ee039e4d093b91b6fdf7d77b9627e2e7d37f000/contract/SafeMultisigWallet',
        'src/tonlabs/SetcodeMultisigWallet/c62e5855bd4af95ba842094f21419c74921f9e10/contract/SetcodeMultisigWallet'
    ],
    compiler: '0.47.0',
    linker: '0.11.84',
    stdlib: '0.47.0'
}).catch((e: any) => console.log(e))