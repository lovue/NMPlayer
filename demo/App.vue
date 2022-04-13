<script setup lang="ts">
import { ref } from 'vue'
import NMPlayer, { Audio } from '../src/index'
import cover from './img/cover.png'

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
  nmplayer.value?.addAudio(newAudio)
}

function play (i: number) {
  nmplayer.value?.playNewAudio(list[i])
}

async function fetchAudioUrl (index: number) {
  audios.value[index].url = './demo/audio/606149108.mp3'
}
</script>

<template>
  <div class="song">
    <span>1.mp3</span>
    <LvButton @click="add(0)">添加</LvButton>
    <LvButton @click="play(0)">播放</LvButton>
  </div>
  <div class="song">
    <span>1.mp3</span>
    <LvButton @click="add(1)">添加</LvButton>
    <LvButton @click="play(1)">播放</LvButton>
  </div>
  <NMPlayer
    ref="nmplayer"
    :audios="audios"
    :async-play="fetchAudioUrl"
    :default-cover="cover"
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
