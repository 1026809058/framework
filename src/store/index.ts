/*
 * @Author: your name
 * @Date: 2021-12-03 11:10:10
 * @LastEditTime: 2021-12-03 11:51:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\store\index.ts
 */
import type { App } from 'vue' //导入类型
import { createStore } from 'vuex'
import { MODULES } from '../types/store'

const modulesList = import.meta.globEager('./modules/*.ts')

const modules: MODULES = {}
for (const key in modulesList) {
  const moduleName: string = key.replace(/^\.\/modules\/(.*)\.\w+$/, '$1') //取文件名
  const value: any = modulesList[key] //取文件的内容
  modules[moduleName] = value.default //赋值
}
const Store = createStore({
  modules
})

export function setupStore(app: App<Element>) {
  app.use(Store)
}
