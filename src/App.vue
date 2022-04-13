<script setup lang="ts">
import { ref } from 'vue'
import NMPlayer, { Audio } from './components/NMPlayer.vue'

const list = [
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

const audios = ref<Audio[]>([])
const nmplayer = ref<InstanceType<typeof NMPlayer> | null>(null)

function add (i: number) {
  let newAudio = list[i]
  NMPlayer
  nmplayer.value?.addAudio(newAudio)
}

function play (i: number) {
  nmplayer.value?.playNewAudio(list[i])
}

async function fetchAudioUrl (index: number) {
  audios.value[index].url = './audio/606149108.mp3'
}
</script>

<template>
  <div class="song">
    <span>1.mp3</span>
    <button class="btn" @click="add(0)">添加</button>
    <button class="btn" @click="play(0)">播放</button>
  </div>
  <div class="song">
    <span>1.mp3</span>
    <button class="btn" @click="add(1)">添加</button>
    <button class="btn" @click="play(1)">播放</button>
  </div>
  <NMPlayer
    ref="nmplayer"
    :audios="audios"
    :async-play="fetchAudioUrl"
    default-cover="./img/cover.png"
    unique="id"
    :sheet-height="200"
    :default-play-mode="2"
    :default-volume="0.75"
  />
</template>

<style lang="less">
.song {
  margin: 100px auto 0;
}
</style>
