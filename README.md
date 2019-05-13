<h1 align="center">NMPlayer</h1>

一个网易云音乐风格的音乐播放器。

### 截图
<img src="./demo/img/player.png">

### 使用
```html
<v-nm-player ref="nmplayer" pos="top" :audios="audios" :async-play="fetchAudioUrl" default-cover="./img/cover.png" unique="id"></v-nm-player>

<script src="https://unpkg.com/vue"></script>
<script src="./js/NMplayer.min.js"></script>
<script>
  new Vue({
    data: {
      audios: [],
      list: [
        {
          id: 1,
          name: '沙漠骆驼',
          author: '展展与罗罗'
        },
        {
          id: 2,
          name: '沙漠骆驼',
          author: '展展与罗罗'
        }
      ]
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
        this.audios[index].url = './audio/606149108.mp3'
      }
    }
  }).$mount('#app')
</script>
```

### LICENSE
[MIT](https://opensource.org/licenses/MIT)
