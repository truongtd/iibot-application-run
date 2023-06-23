<template>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @submit.prevent="login"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
  
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item v-if="errLogin" name="" :wrapper-col="{ offset: 8, span: 16 }">
        <a-label class="errLogin">Password or Username is incorrect</a-label>
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
  
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
      
    </a-form>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {useAuthStore} from '../stores/auth'
  export default defineComponent({
    setup() {
        return {
          authStore:useAuthStore(),
        }
      
    },

    data(){            
      return{
        formState:{
          username:'',
          password:'',
          remember:true
        },
        isSubmitting:false,
        errLogin:false,
      }
    },
    methods: {
      async login(){
        this.isSubmitting=true
        const {username,password} =this.formState;
        const result= await this.authStore.login(username,password)        
        if(result){
        this.$router.push('/')
        this.errLogin=false
        }else{
          if(username!==''&&password!=''){
          this.errLogin=true
          }
        }
      }
    }
  });
  </script>
  <style>
.errLogin {
  color: red;
}
</style>