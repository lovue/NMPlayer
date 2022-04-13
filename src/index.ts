import 'https://at.alicdn.com/t/font_1184201_9no83pi65y.js?url'
import type { App } from 'vue'
import NMPlayer from './components/NMPlayer.vue'

export default function (app: App) {
  app.component('NMPlayer', NMPlayer)
}
