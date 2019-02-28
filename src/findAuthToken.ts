export function findAuthToken(content: string, registry: string = 'registry.npmjs.org'): string | null {
    const lines = content
        .split('\n')
        .map((line) => line.trim())

    const authTokenLine = lines.find((line) => new RegExp(`^//${registry}/:_authToken=`).test(line))

    if (!authTokenLine) {
        return null
    }

    return authTokenLine.substr(`//${registry}/:_authToken=`.length)
}
