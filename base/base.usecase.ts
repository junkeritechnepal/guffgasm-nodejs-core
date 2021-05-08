import { Injectable, Logger } from "@nestjs/common"
import { Sequelize, Transaction } from "sequelize/types"
import { ApiResponseBuilder } from "./base.api.response"
import { BaseService } from "./base.service"

@Injectable()
export abstract class BaseUseCase {
    protected mlogger = new Logger(BaseUseCase.name)

    constructor() {}
}