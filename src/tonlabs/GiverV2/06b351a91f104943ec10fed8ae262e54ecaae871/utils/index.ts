import {Config, prepare, StringMap, TestGiverKit} from 'jton'
import {GiverV2} from '../'

export interface TestGiverV2Kit extends TestGiverKit {
    giver: GiverV2
}

export function prepareGiverV2(config: Config, keysMap: StringMap, timeout?: number): TestGiverV2Kit {
    const {client, giverKeys} = prepare(config, keysMap)
    return {
        client: client,
        giver: new GiverV2(client, giverKeys, timeout)
    }
}