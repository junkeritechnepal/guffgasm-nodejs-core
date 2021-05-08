import { ExceptionFilter, Catch, ArgumentsHost, HttpException, InternalServerErrorException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { ContractMessage } from '../data/contract.message';

@Catch()
export class BaseAppExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(BaseAppExceptionFilter.name)

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode =
    exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR

      const message = exception.message ?? ContractMessage.ERROR_DEFAULT

      this.logger.error(message + 'code=>' +statusCode)

    return response
      .status(statusCode)
      .json({
        status: false,
        message:message
      })
  }
}


export class AuthorizationException extends HttpException {
    constructor(payload:any) {
      super(payload, HttpStatus.FORBIDDEN)
    }
}

export class BadRequestException extends HttpException {
  constructor(payload:any) {
    super(payload, HttpStatus.BAD_REQUEST)
  }
}
