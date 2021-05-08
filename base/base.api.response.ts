import { HttpException, HttpStatus } from "@nestjs/common"
import { BadRequestException } from "@nestjs/common/exceptions/bad-request.exception"
import { BaseExceptionFilter } from "@nestjs/core"
import { ContractMessage } from "../data/contract.message"

import { AuthorizationException } from "./base.exception"

export class BaseApiResponse{
    status: Boolean=false
    code: number
    message: String
    data:any

    static throwUnAuthorized(response: BaseApiResponse){
        throw new AuthorizationException(response)
    }
    static throwUnAuthorizedMessage(message: string) {
        const response=new BaseApiResponse()
        response.message=message
        response.status=false
        throw new AuthorizationException(response)
    }
    static throwBadRequest(response: BaseApiResponse){
        throw new BadRequestException(response)
    }

    static throwAccessTokenRequire(){
        throw new HttpException(ContractMessage.ACCESS_TOKEN_MISSING, HttpStatus.UNAUTHORIZED)
    }

    static throwAccessTokenInvalid(){
        throw new HttpException(ContractMessage.ACCESS_TOKEN_INVALID, HttpStatus.UNAUTHORIZED)
    }
}

export class ApiResponseBuilder {
    status: Boolean=false
    code: number
    message: String
    data:any

    setMessage(message: string) {
        this.message = message
        return this
    }

    setCode(code: number) {
        this.code = code
        return this
    }

    setData(data: any) {
        this.data = data
        return this
    }


    setStatus(status: boolean) {
        this.status = status
        return this
    }


    build() : BaseApiResponse {
        const response = new BaseApiResponse()
        response.status = this.status
        response.code = this.code
        response.message = this.message
        response.data = this.data
        return response
    }
}

export abstract class ApiResult<T> {
    data: T
    constructor(data: T) {
        this.data = data
    }
} 

export class ApiSuccess extends ApiResult<any> {}
export class ApiFailure extends ApiResult<any> {}
export class ApiSuggestion extends ApiResult<any> {}
export class ApiError extends ApiResult<any> {}

export class BaseResponseDto{
   userId: number
   id: number
}