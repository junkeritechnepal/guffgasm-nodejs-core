import { Injectable, Logger } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Transaction } from "sequelize/types";
import { ApiFailure, ErrorResponse } from "./base.api.response";

@Injectable()
export abstract class BaseService {
    protected mlogger = new Logger(BaseService.name)

    constructor(readonly sequelize: Sequelize) {}

    async provideTransaction() : Promise<Transaction> {
        return this.sequelize.transaction()
    }

    async handleFailure(message: string = null) {
        return new ErrorResponse<ApiFailure>(message)
    }
}