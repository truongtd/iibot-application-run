import { httpClient } from "./server"
export  async function buildSideBar(app_id:string) {
    const payload ={
       app_id,
       type:"SIDERBAR"  
    }
    return await httpClient.post('/menu/treeview',payload)
}