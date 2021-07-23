import {make} from 'jton'
import {root} from '../root'

make({
    root,
    compile: [
        'src/kokkekpek/Idle/source/Idle'
    ],
    wrap: [
        'src/broxus/fungibleToken/74905260499d79cf7cb0d89a6eb572176fc1fcd5/contracts/RootTokenContract',
        'src/broxus/fungibleToken/74905260499d79cf7cb0d89a6eb572176fc1fcd5/contracts/TONTokenWallet',
        'src/kokkekpek/Idle/b911fc8f70d58477d53bf514e693bf76f96efd25/contract/Idle',
        'src/kokkekpek/Idle/7504e7f94fe085f7c14c3800093ee1a9f5e2d3e2/contract/Idle',
        'src/tonlabs/GiverV2/8a2bc005cfec4ecd770d50b074179e525b76513b/contract/GiverV2',
        'src/tonlabs/GiverV2/06b351a91f104943ec10fed8ae262e54ecaae871/contract/GiverV2',
        'src/tonlabs/SafeMultisigWallet/5ee039e4d093b91b6fdf7d77b9627e2e7d37f000/contract/SafeMultisigWallet',
        'src/tonlabs/SetcodeMultisigWallet/c62e5855bd4af95ba842094f21419c74921f9e10/contract/SetcodeMultisigWallet'
    ],
    compiler: '0.47.0',
    linker: '0.11.86',
    stdlib: '0.47.0'
}).catch((e: any) => console.log(e))