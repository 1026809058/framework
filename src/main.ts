/*
 * @Author: your name
 * @Date: 2021-12-02 11:39:52
 * @LastEditTime: 2021-12-21 16:04:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './scss/global.scss'
import { setupStore } from './store/index'
import global from './components/globalComponents'
;(async () => {
  const app = createApp(App)
  app.mount('#app')
  //全局组件注册
  global(app)
  //vuex
  setupStore(app)
  await router.isReady()
})()
