import {SafeMultisigWallet} from './src/tonlabs/SafeMultisigWallet'
import {TonClient} from '@tonclient/core'
import {createClient, getRandomKeyPair, x0} from 'jton'
import {GiverV2, GiverV2SeKeys} from './src/tonlabs/GiverV2'
import {KeyPair} from '@tonclient/core/dist/modules'
import {libNode} from '@tonclient/lib-node'

TonClient.useBinaryLibrary(libNode)
const client: TonClient = createClient('http://localhost:8080')
const giverV2: GiverV2 = new GiverV2(client, 30_000, GiverV2SeKeys)

async function run() {
    const keys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, 30_000, keys)
    await giverV2.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: 1_000_000_000
    })
    await safeMultisigWallet.deploy({
        owners: [x0(keys.public)],
        reqConfirms: 1
    })

    console.log(await safeMultisigWallet.isConfirmed({
        mask: 1,
        index: 0
    }))
}

run().then()