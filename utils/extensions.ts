
export class AppUtils {
    static isNullable(data: any): Boolean {
      return !this.isSafe(data)
    }

    static hasData(data: any[]) :Boolean {
        return data?.length>0 ?? false
    }

    static isSafe(data: any): Boolean {
        if(data == true) return true
        if (
            data == null ||
            data == 'undefined' ||
            data == undefined ||
            (Object.keys(data).length === 0)
        ) {
            return false
        }
        return true
    }


    static toJson(object: any) {
        return JSON.stringify(object)
    }

    static isSatisfied<T, C extends new (...args: any[]) => any>(value: T, clss: C): boolean {
        return value instanceof clss;
    }
}

export function isSafes(data: any[]): Boolean {
    for (var i = 0; i < data.length; i++) {
        if (!this.isSafe(data[i])) return false
    }
    return true
}

export function isNullables(data: [any]): Boolean {
    for (var i = 0; i < data.length; i++) {
        if (data[i] == null || data[i] == 'undefined' || data[i] == undefined) {
            return true
        }
        return false
    }
}

export function hasData(data: any[]) :Boolean {
    return data?.length>0 ?? false
}


