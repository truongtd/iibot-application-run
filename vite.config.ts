import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
export default({mode}) => {
  process.env= Object.assign(process.env,loadEnv(mode,process.cwd(),''))
  return defineConfig({
    server:{
      port:8081
    },
    resolve:{
      alias:{
        '@':path.resolve(__dirname,'./src'),

      }
    },
    plugins: [vue(),
      Components({
        resolvers:[AntDesignVueResolver()],
      })
    
    ]
  })
}