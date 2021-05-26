import { Injectable, Logger } from "@nestjs/common"

@Injectable()
export abstract class BaseUseCase {
    protected mlogger = new Logger(BaseUseCase.name)

    constructor() {}
}