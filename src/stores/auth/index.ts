import { defineStore } from "pinia"
import { getUserProfile, login, logout } from "../../api/auth";
import { buildSideBar } from "../../api/application";


interface IUserInfo {
    token:string,
    username:string,
    email:string,
    phone_number:string
}

interface IState {
    user?: IUserInfo,
    isFetching: boolean,
    menu?:IMenu
}
interface IMenu {
    title:string,
    key:string,
    icon:string,
    items:[]
}
export const useAuthStore =defineStore('auth',{
    state: ():IState => ({
        user: undefined,
        menu:undefined,
        isFetching:false,
    }),

    actions: {
        async login(username: string, password: string ): Promise<boolean>{
            try{
                const result:any=await login({username,password});
                if(result.data){
                    const userInfo=await getUserProfile()
                    localStorage.setItem("user", JSON.stringify(userInfo.data));
                    this.user = userInfo.data;                    
                }
                const resMenu= await buildSideBar('6ac5c239-0c6a-473a-8065-3a007f5c2ff1')
                if(resMenu.data){
                    this.menu=resMenu.data;
                }
                console.log(`welcome ${this.user}`)
                return true
            }catch(e){
                console.log(e)
                return false;
            }
        },
        async logout(){
            await logout()
            localStorage.removeItem("user");
            this.user=undefined;
            this.menu=undefined;
        },
        async getUserProfile(){
            const userInfo=await getUserProfile();
            if(userInfo.data){
                this.user=userInfo.data;
                const resMenu= await buildSideBar('6ac5c239-0c6a-473a-8065-3a007f5c2ff1')
                this.menu=resMenu.data;
            }
            return userInfo;
        }
    },

    getters:{
        getUser():any{
            return this.user;
        },
        getMenu():any{
            return this.menu;
        }
    }
})
