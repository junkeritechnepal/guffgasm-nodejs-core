
export class PromiseUtil{
    static async delay(timeOut:any):Promise<any>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(true)
            }, timeOut);
        })
   
    }
}
