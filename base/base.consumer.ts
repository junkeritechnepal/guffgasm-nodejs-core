import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class BaseConsumer {

    protected mLogger: Logger = new Logger(BaseConsumer.name)
}