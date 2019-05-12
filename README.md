<h1 align="center">NMPlayer</h1>

一个网易云音乐风格的音乐播放器。

### 截图
<img src="./public/img/player.png">

### 使用
```html
<v-nm-player ref="nmplayer" pos="top" :audios="audios" :async-play="fetchAudioUrl" default-cover="/img/cover.png" unique="id"></v-nm-player>

<script src="https://unpkg.com/vue"></script>
<script src="/js/NMPlayer.umd.min.js"></script>
<script>
  // pos: 播放器位置，默认为窗口底部，可以设置为：top
  // audios：已加入的歌曲列表
  // async-play：当播放歌曲时需要异步获取歌曲的信息时设置
  // default-cover：当前没有正在播放的歌曲时显示的封面图
  // unique：区分每个audio对象的属性值，默认为：id

  Vue.component(NMPlayer.name, NMPlayer)
  new Vue({
    data: {
      audios: [],
      list: [
        {
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
        this.audios.push(newAudio)
      },
      play(i) {
        this.$refs.nmplayer.playNewAudio(this.list[i])
      },
      async fetchAudioUrl(index) {
        this.audios[index].url = '/audio/606149108.mp3'
      }
    }
  }).$mount('#app')
</script>
```

### LICENSE
[MIT](https://opensource.org/licenses/MIT)
