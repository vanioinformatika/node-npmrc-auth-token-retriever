#!/usr/bin/env node

import * as cli from 'cli'
import * as os from 'os'
import * as path from 'path'
import {retrieveAuthToken} from '../retrieveAuthToken'

const options = cli.parse({
    registry: [false, 'Npm registry URL', 'string', 'registry.npmjs.org'],
    npmrc: [false, 'Path for .npmrc', 'file', path.join(os.homedir(), '.npmrc')],
})

cli.output(retrieveAuthToken(options.registry, options.npmrc))
