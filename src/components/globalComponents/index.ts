/*
 * @Author: your name
 * @Date: 2021-12-07 10:12:33
 * @LastEditTime: 2021-12-07 10:13:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\components\globalComponents\index.ts
 */
import { App, Component } from 'vue'

interface FileType {
  [key: string]: Component
}

// 导入 globComponents 下面的 所有 .vue文件
const files: Record<string, FileType> = import.meta.globEager(
  '/src/components/globalComponents/*/*.vue'
)

export default (app: App): void => {
  // 因为通过 import.meta.globEager 返回的列表不能迭代所以直接使用 Object.keys 拿到 key 遍历
  Object.keys(files).forEach((c: string) => {
    const component = files[c]?.default
    // 挂载全局控件
    app.component(component.name as string, component)
  })
}
