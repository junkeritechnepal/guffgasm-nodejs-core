import { ContractValue } from "./contract.value"

export class ContractUrl{

    static API_V1="api/v1"
    static ACCOUNT_REGISTER='account/register'
    static ACCOUNT_LOGIN='account/login'

    static KAWADI_BOOK = "/kawadi-book"
    static KAWADI_BOOK_CREATE = `${ContractUrl.KAWADI_BOOK}/create`
    static KAWADI_BOOK_CANCEL = `${ContractUrl.KAWADI_BOOK}/cancel`

    static LIQUOR_BOOK = "/liquor-book"
    static LIQUOR_BOOK_CREATE = `${ContractUrl.LIQUOR_BOOK}/create`
    static LIQUOR_BOOK_CANCEL = `${ContractUrl.LIQUOR_BOOK}/cancel`
}