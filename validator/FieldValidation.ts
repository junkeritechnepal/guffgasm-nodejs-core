import { AppUtils } from "../utils/extensions";

export function isSafe(object: object) {
    return AppUtils.isSafe(object)
}

export function isNullable(object: any) {
    return AppUtils.isNullable(object)
}
