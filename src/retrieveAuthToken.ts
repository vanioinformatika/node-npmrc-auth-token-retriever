import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import {findAuthToken} from './findAuthToken'

export function retrieveAuthToken(registry: string = 'registry.npmjs.org', npmrcPath?: string): string | null {
    npmrcPath = npmrcPath || path.join(os.homedir(), '.npmrc')

    if (!fs.existsSync(npmrcPath)) {
        return null
    }

    const content = fs.readFileSync(npmrcPath, {encoding: 'utf8'})

    return findAuthToken(content, registry)
}
