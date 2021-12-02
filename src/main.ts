/*
 * @Author: your name
 * @Date: 2021-12-02 11:39:52
 * @LastEditTime: 2021-12-02 16:09:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'


(async ()=>{
  const app=createApp(App)
  
  await router.isReady();
})
