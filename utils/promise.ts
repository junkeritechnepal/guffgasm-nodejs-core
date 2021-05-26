
export async function delay(timeOut:any):Promise<any>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, timeOut);
    })
}
