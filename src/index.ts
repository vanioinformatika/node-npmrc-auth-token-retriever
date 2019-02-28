export {findAuthToken} from './findAuthToken'
export {retrieveAuthToken} from './retrieveAuthToken'

export function ErrorHandler<T, R>(
    target: T,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<R | void>>,
) {
    // tslint:disable-next-line:no-console
    console.log('ErrorHandler', target, key, descriptor)
    const method = descriptor.value || (async (...args: any[]): Promise<void> => {
        throw new Error('No method found')
    })

    descriptor.value = async function(this: T, ...args): Promise<R | void> {
        try {
            return await method.apply(this, args)
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.warn(error)
        }
    }

    return descriptor
}
