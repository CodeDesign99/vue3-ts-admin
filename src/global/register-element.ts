import { App } from 'vue'
// import 'element-plus/theme-chalk/base.css'
import 'element-plus/dist/index.css'
import { ElButton, ElTable, ElAlert, ElAside, ElAutocomplete, ElAvatar, ElBacktop, ElBadge } from 'element-plus'
const components = [ElButton, ElTable, ElAlert, ElAside, ElAutocomplete, ElAvatar, ElBacktop, ElBadge]
export default function (app: App<Element>): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
