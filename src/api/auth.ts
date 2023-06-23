import { httpClient } from "./server";
export interface ILoginInfo {
    username:string
    password: string
}

export function login(loginInfo:ILoginInfo):Promise<void> {
    const payload=          
        {
                "passWord":loginInfo.password,
                "userName":loginInfo.username
        }
               
    console.log(httpClient.getUri());
    return httpClient.post('/auth/login',payload)
}
export function logout(){
    return httpClient.post('/auth/logout',{})
}
export async function getUserProfile(){    
    return await httpClient.post('/auth/profile',{})
}