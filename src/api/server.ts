import axios from "axios"
export const httpClient=axios.create({
    withCredentials:true,
    baseURL: 'http://localhost:3000/ibot',
    headers: {
        'Content-Type':'application/json',
        "client_id": "AUTH"
    }
})

export interface ServerResponse<T> {
    status:number
    data: T
}
export async function apiBoundary<T>(promise:Promise<ServerResponse<T>>,defaultErr?:any):Promise< T| null> {
    try {
        const res= await promise;
        console.log(res);
        return res.data;
    }catch(e) {
        return defaultErr || null;
    }

}