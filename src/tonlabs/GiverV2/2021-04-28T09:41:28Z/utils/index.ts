import {Config, prepare, StringMap, TestGiverKit} from 'jton'
import {TonClient} from '@tonclient/core'
import {GiverV2} from '../'

export interface TestGiverV2Kit extends TestGiverKit {
    client: TonClient
    timeout: number
    giver: GiverV2
}

export function prepareGiverV2(config: Config, keysMap: StringMap): TestGiverV2Kit {
    const {client, timeout, giverKeys} = prepare(config, keysMap)
    return {
        client: client,
        timeout: timeout,
        giver: new GiverV2(client, timeout, giverKeys)
    }
}