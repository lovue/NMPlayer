<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import NMProgress from './NMProgress.vue'
import { isEmptyObject, secondsToReadable } from '../js/utils'

export interface Audio {
  url: string
  id?: string
}

const props = withDefaults(defineProps<{
  preload?: boolean
  audios: Audio[]
  asyncPlay: (index: number) => void
  defaultCover?: string
  position?: string
  unique?: string
  sheetHeight?: number
  defaultPlayMode?: number
  defaultVolume?: number
}>(), {
  unique: 'id',
  defaultPlayMode: 0
})

const playModes = ['circle-list', 'circle-single', 'random']

const audioElem = ref<HTMLMediaElement | null>(null)
const currentAudio = ref({})
const currentIndex = ref(0)
const paused = ref(true)
const duration = ref('00:00')
const playedTime = ref('00:00')
const playedRatio = ref(0)
const loadedRatio = ref(0)
const volume = ref(0)
const playMode = ref(props.defaultPlayMode)
const speakerIcon = ref('speaker')
const isShowVolumeSlider = ref(false)
const isShowSheet = ref(false)
const canPlay = ref(!props.audios.length)

const playModeIcon = computed(() => playModes[playMode.value])

watch(currentIndex, updateCurrentAudio)

onMounted(() => {
  init()

  updateCurrentAudio(currentIndex.value)
  window.addEventListener('click', hidePopups)
})

onUnmounted(() => {
  window.removeEventListener('click', hidePopups)
})

function hidePopups () {
  isShowSheet.value = false
  isShowVolumeSlider.value = false
}

function init () {
  if (audioElem.value === null) return
  if (props.defaultVolume) audioElem.value.volume = props.defaultVolume

  volume.value = audioElem.value.volume || 0

  /* Bind events */
  audioElem.value.addEventListener('canplay', play)
  audioElem.value.addEventListener('canplaythrough', () => loadedRatio.value = 1)
  audioElem.value.addEventListener('durationchange', () => {
    duration.value = secondsToReadable(audioElem.value?.duration || 0)
  })
  audioElem.value.addEventListener('pause', () => paused.value = true)
  audioElem.value.addEventListener('play', () => paused.value = false)
  audioElem.value.addEventListener('ended', playEnd)
  audioElem.value.addEventListener('timeupdate', () => {
    if (audioElem.value === null) return

    playedTime.value = secondsToReadable(audioElem.value.currentTime || 0)
    playedRatio.value = audioElem.value.currentTime / audioElem.value.duration
  })
  audioElem.value.addEventListener('progress', () => {
    if (audioElem.value === null) return

    if (audioElem.value.buffered.length) {
      loadedRatio.value = audioElem.value.buffered.end(audioElem.value.buffered.length - 1) / audioElem.value.duration
    } else {
      loadedRatio.value = 0
    }
  })
  audioElem.value.addEventListener('volumechange', () => {
    volume.value = audioElem.value?.volume || 0
  })
}

async function updateCurrentAudio (index: number) {
  const audio = props.audios[index]

  if (audio === undefined) {
    paused.value = true
    return
  }

  if (audio.url) {
    currentAudio.value = audio
    return
  }

  if (props.asyncPlay) {
    await props.asyncPlay(index)
  }

  currentAudio.value = audio
}

function addAudio (audio: Audio) {
  if (audio[props.unique] === undefined) return

  if (!props.audios.length) {
    props.audios.push({ ...audio })
    canPlay.value = false
    updateCurrentAudio(0)
    return
  }

  const _index = props.audios.findIndex(_audio => _audio[props.unique] === audio[props.unique])
  if (_index > -1) return

  props.audios.push({ ...audio })
}

function playNewAudio (audio: Audio) {
  if (audio[props.unique] === undefined) return

  const _index = props.audios.findIndex(_audio => _audio[props.unique] === audio[props.unique])
  if (_index === -1)  {
    props.audios.unshift({ ...audio })
    playIndex(0)
    return
  }

  playIndex(_index)
}

function playIndex (index: number) {
  if (currentIndex.value === index) {
    updateCurrentAudio(index)
  } else {
    currentIndex.value = index
  }
}

function play () {
  if (!canPlay.value) {
    canPlay.value = true
    return
  }
  if (isEmptyObject(currentAudio.value)) return

  audioElem.value?.play().catch(e => {
    if (e.name === 'NotAllowedError') {
      pause()
    }
  })
}

function pause () {
  audioElem.value?.pause()
}

function playEnd () {
  if (playMode.value === 0) next()
  if (playMode.value === 1) audioElem.value?.load()
  if (playMode.value === 2) {
    const random = Math.floor(Math.random() * props.audios.length)

    if (currentIndex.value === random) {
      next()
    } else {
      currentIndex.value = random
    }
  }
}

function prev () {
  if (currentIndex.value === 0) {
    currentIndex.value = props.audios.length - 1
  } else {
    currentIndex.value--
  }
}

function next () {
  if (currentIndex.value === props.audios.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value--
  }
}

function clickAudioBar (ratio: number) {
  (audioElem.value as HTMLMediaElement).currentTime = (audioElem.value?.duration || 0) * ratio
}

function clickVolumeBar (ratio: number) {
  (audioElem.value as HTMLMediaElement).volume = ratio
}

function changePlayMode () {
  if (playMode.value == 2) {
    playMode.value = 0
    return
  }

  playMode.value++
}

function toggleMute () {
  if (audioElem.value === null) return

  audioElem.value.muted = !audioElem.value.muted
  speakerIcon.value = audioElem.value.muted ? 'speaker-mute' : 'speaker'
}

function toggleShowVolume () {
  isShowSheet.value = false
  isShowVolumeSlider.value = !isShowVolumeSlider.value
}

function toggleShowSheet () {
  isShowSheet.value = !isShowSheet.value
  isShowVolumeSlider.value = false
}

function remove (index: number) {
  if (currentIndex.value === index) next()

  props.audios.splice(index, 1)

  if (props.audios.length <= 1) isShowSheet.value = false
}

function clearSheet () {
  props.audios.splice(0, props.audios.length)
  currentAudio.value = {}
  paused.value = true
  duration.value = '00:00'
  playedTime.value = '00:00'
  playedRatio.value = 0
  audioElem.value?.load()
  isShowSheet.value = false
}

defineExpose({
  addAudio,
  playNewAudio
})
</script>

<template>
  <div class="nm-player" :class="`pos-${position}`">
    <div class="nm-player__cover" :style="`background-image: url(${currentAudio.cover || defaultCover})`">
      <!--<div class="icon-wrap">
        <nmp-icon icon="fangda" size="36"></nmp-icon>
      </div>-->
    </div>
    <div class="nm-player__actions">
      <div class="action-prev" @click="prev">
        <LvIcon icon="play-next" prefix="nmp" :size="16" />
      </div>
      <div class="action-play p-play" v-if="paused" @click="play">
        <LvIcon icon="play" prefix="nmp" :size="16" />
      </div>
      <div class="action-play" v-else @click="pause">
        <LvIcon icon="pause" prefix="nmp" :size="16" />
      </div>
      <div class="action-next" @click="next">
        <LvIcon icon="play-next" prefix="nmp" :size="16" />
      </div>
    </div>
    <div class="nm-player__content">
      <div class="nm-player__info">
        <div class="info-left">
          <template v-if="currentAudio.name">
            <span class="info-name">{{ currentAudio.name }}</span> - <span class="info-author">{{ currentAudio.author }}</span>
          </template>
        </div>
        <div class="info-right">
          <span class="info-played">{{ playedTime }}</span> / <span class="info-length">{{ duration }}</span>
        </div>
      </div>
      <div class="nm-player__audio">
        <audio :src="currentAudio.url" :preload="preload" ref="audioElem"></audio>
        <NMProgress
          :played="playedRatio"
          :loaded="loadedRatio"
          decimal
          @click-bar="clickAudioBar"
        />
      </div>
    </div>
    <div class="nm-player__tools">
      <div class="tool-play-mode">
        <LvIcon :icon="playModeIcon" prefix="nmp" :size="16" @click="changePlayMode" />
      </div>
      <div class="tool-volume">
        <LvIcon icon="speaker" prefix="nmp" :size="16" @click.stop="toggleShowVolume" />
        <div class="volume-wrap" @click.stop v-show="isShowVolumeSlider">
          <LvIcon :icon="speakerIcon" prefix="nmp" :size="16" @click="toggleMute" />
          <NMProgress
            :played="volume"
            :loaded="0"
            :width="200"
            decimal
            draggable
            @click-bar="clickVolumeBar"
            @drag-bar="clickVolumeBar"
          />
        </div>
      </div>
      <div class="tool-sheet" @click.stop="toggleShowSheet" v-if="audios.length > 1">
        <LvIcon icon="menu-fold" prefix="nmp" :size="16" />
        <span class="tool-count">{{ audios.length }}</span>
      </div>
    </div>

    <div class="nm-player__sheet" @click.stop v-show="isShowSheet">
      <div class="sheet-head">
        <span>播放列表</span>
        <div class="sheet-actions">
          <LvIcon icon="delete" prefix="nmp" :size="14" @click="clearSheet" />
          <LvIcon icon="close" prefix="nmp" :size="14" @click="isShowSheet = false" />
        </div>
      </div>
      <div class="sheet-body" :style="`max-height: ${sheetHeight}px`">
        <div
          class="sheet-row"
          :class="{focus: currentIndex === i}"
          v-for="(audio, i) of audios"
          :key="`row-${i}`"
          @dblclick="currentIndex = i"
        >
          <div class="sheet-cell">
            <LvIcon icon="play" prefix="nmp" :size="14" v-if="currentIndex === i" />
          </div>
          <div class="sheet-cell cell-name">
            <span>{{ audio.name }}</span>
          </div>
          <div class="sheet-cell cell-author">{{ audio.author }}</div>
          <div class="sheet-cell cell-delete">
            <LvIcon icon="delete" prefix="nmp" :size="14" @click="remove(i)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./NMPlayer.less";
</style>
