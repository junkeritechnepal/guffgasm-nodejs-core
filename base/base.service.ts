import { Injectable, Logger } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Transaction } from "sequelize/types";

@Injectable()
export abstract class BaseService {
    protected mlogger = new Logger(BaseService.name)

    constructor(readonly sequelize: Sequelize) {}

    async provideTransaction() : Promise<Transaction> {
        return this.sequelize.transaction()
    }
}