import App from './App.vue'

const install = function (Vue) {
  if (!Vue || install.installed) return

  Vue.component(App.name, App)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
