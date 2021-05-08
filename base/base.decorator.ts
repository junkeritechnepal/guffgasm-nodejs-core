import { Logger } from "@nestjs/common"


const logger = new Logger("catchError")

const catchError = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) =>  {
    const originalMethod = descriptor.value

    descriptor.value = async function(...args) {
        try {
            return await originalMethod.apply(this, args)
        } catch (error) {
            logger.error(error)
            return null
        }
    }
    return descriptor
}

export default catchError