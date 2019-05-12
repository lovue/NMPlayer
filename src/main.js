import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    audios: [
    ],
    list: [
      {
        id: 1,
        name: '沙漠骆驼',
        author: '展展与罗罗'
      }
    ]
  },
  components: {
    [App.name]: App
  },
  methods: {
    add(i) {
      let newAudio = this.list[i]
      for (let audio of this.audios) {
        if (audio.id === newAudio.id) return
      }
      this.audios.push(Object.assign({}, newAudio))
    },
    play(i) {
      this.$refs.nmplayer.playNewAudio(this.list[i])
    },
    async fetchAudioUrl(index) {
      this.audios[index].url = '/audio/606149108.mp3'
    }
  }
}).$mount('#app')
