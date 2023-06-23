<template>
  <Suspense >
    <layout  :login="handleLogin" :logout="hanldeLogout" :appData="appData "/>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import {useAuthStore} from './stores/auth'
// import { buildSideBar } from './api/application';
export default defineComponent({
  components:{
    layout:defineAsyncComponent(()=>
       import('./layouts/MainLayout.vue')
       )
  },
  data:function(){
      const authStore =useAuthStore();      
      const isLoading=true;      
      const appData={               
        authStore,              
      }
      return{
        isLoading,
        appData
      }
  },
  methods:{
    async hanldeLogout(){
      await this.appData.authStore.logout(); 
      // this.appData.menuData={}     
      this.$router.push('/login');
    },
    handleLogin(){
      this.$router.push('/login');    
    },    
  },
  mounted:async function(){
    // if(this.appData.authStore.getUser){
    //   await this.buildSideBar();      
    // }
    
  },
  created:async function(){
    try{
    const res= await useAuthStore().getUserProfile();
    if(res.data){
      
    }
    }catch{
      this.$router.push('/login');
    }
  }
})
</script>
<style scoped>

</style>
