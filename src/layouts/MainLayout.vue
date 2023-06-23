<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="sider">
      <div class="logo" />
      <Sidebar v-if="authStore.getMenu" :menu="authStore.getMenu"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
          <div class="head-authentication">              
              <div><a-button  v-if="authStore.getUser" type="text" class="header-label" @click="handlLogout">{{ authStore.getUser.name }}</a-button>
                    <a-button  v-else type="text" class="header-label" @click="handLogin">Login</a-button>
                </div>
              <a-dropdown v-if="authStore.getUser">
                  <template #overlay>
                      <a-menu @click="handleMenuClick">
                          <a-menu-item key="1">
                              <UserOutlined />
                               Settings
                          </a-menu-item>
                          <a-menu-item key="2">
                              <UserOutlined />
                               Profile
                          </a-menu-item>
                          <a-menu-item key="3">
                              <LogoutOutlined />
                              Logout
                          </a-menu-item>
                          </a-menu>
                  </template>
              <a-button class="user-icon" type="text">
                  <UserOutlined />
              <DownOutlined />
              </a-button>
              </a-dropdown>
              

              
              
          </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
          
        
        
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
LogoutOutlined,
} from '@ant-design/icons-vue';

import { defineAsyncComponent, defineComponent, ref } from 'vue';
import NodeTree from './NodeTree.vue';
export default defineComponent({
  props:['login','appData','logout'],
  components: {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  NodeTree,
  Sidebar: defineAsyncComponent(() => import("./SideBar.vue")),
  LogoutOutlined
},
  data() {
    
    const authStore=this.appData.authStore   
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),      
      authStore,      
    };
  },
  methods:{
      handLogin(){
          this.login();
      },
      handlLogout(){
          this.logout();

      },
     handleMenuClick(e: { key: any; })  {
          switch(e.key){
              case '1':
                  break;
              case '2':
                  break;
              case '3':
                  this.logout();
                  break;
          }
      }
  },
  computed: {
    nodes() {
      return [
        
      ]
    }
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #bebdbd;
}
.head-authentication{
display: flex;
align-items: center;
justify-content: flex-end;
align-content: center;
padding-right: 16px;
}
.header{
  background-color: #bebdbd;
}
.sider {
  background-color: #fff;
}
.user-icon {
  background-color: grey;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
}
</style>