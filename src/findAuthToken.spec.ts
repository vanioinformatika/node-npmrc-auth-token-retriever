import {expect} from 'chai'
import {findAuthToken} from './findAuthToken'

describe('parseAuthToken', () => {
    const content =
        '@vanioinformatika:registry=http://npmjs.vanioinformatika.com/\n' +
        '//npmjs.vanioinformatika.com/:_authToken=00000000-0000-0000-0000-000000000001\n' +
        '//registry.npmjs.org/:_authToken=00000000-0000-0000-0000-000000000002\n'

    it('should return token (default registry)', () => {
        const token = findAuthToken(content)

        expect(token).to.be.a('string').and.equal('00000000-0000-0000-0000-000000000002')
    })

    it('should return token (private registry)', () => {
        const token = findAuthToken(content, 'npmjs.vanioinformatika.com')

        expect(token).to.be.a('string').and.equal('00000000-0000-0000-0000-000000000001')
    })

    it('should return null (registry not found)', () => {
        const token = findAuthToken(content, 'npmjs.othercompany.com')

        expect(token).to.be.a('null')
    })
})
