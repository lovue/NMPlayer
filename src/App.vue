<template>
  <div class="v-nm-player" :class="`pos-${pos}`">
    <div class="nm-cover" :style="`background-image: url(${currentAudio.cover || defaultCover})`">
      <!--<div class="icon-wrap">
        <nmp-icon icon="fangda" size="36"></nmp-icon>
      </div>-->
    </div>
    <div class="nm-act">
      <div class="a-prev" @click="prev"><nmp-icon icon="play-next" size="16"></nmp-icon></div>
      <div class="a-play p-play" v-if="paused" @click="play">
        <nmp-icon icon="play" size="16"></nmp-icon>
      </div>
      <div class="a-play" v-else @click="pause">
        <nmp-icon icon="pause" size="16"></nmp-icon>
      </div>
      <div class="a-next" @click="next"><nmp-icon icon="play-next" size="16"></nmp-icon></div>
    </div>
    <div class="nm-content">
      <div class="nm-info">
        <div class="i-l">
          <template v-if="currentAudio.name">
            <span class="i-name">{{currentAudio.name}}</span> - <span class="i-author">{{currentAudio.author}}</span>
          </template>
        </div>
        <div class="i-r">
          <span class="i-played">{{playedTime}}</span> / <span class="i-length">{{duration}}</span>
        </div>
      </div>
      <div class="nm-audio">
        <audio :src="currentAudio.url" :preload="preload"></audio>
        <nmp-progress :played="playedRatio" :loaded="loadedRatio" decimal transition @click-bar="clickAudioBar"></nmp-progress>
      </div>
    </div>
    <div class="nm-tools">
      <div class="t-play-mode">
        <nmp-icon :icon="playModeIcon" size="16" @click="changePlayMode"></nmp-icon>
      </div>
      <div class="t-volume">
        <nmp-icon icon="speaker" size="16" @click.native.stop="toggleShowVolume"></nmp-icon>
        <div class="volume-wrap" @click.stop v-show="isShowVolumeSlider">
          <nmp-icon :icon="speakerIcon" size="16" @click="toggleMute"></nmp-icon>
          <nmp-progress :played="volume" :loaded="0" :width="200" decimal draggable @click-bar="clickVolumeBar" @drag-bar="clickVolumeBar"></nmp-progress>
        </div>
      </div>
      <div class="t-sheet" @click.stop="toggleShowSheet" v-if="audios.length > 1">
        <nmp-icon icon="menu-fold" size="16"></nmp-icon>
        <span class="t-count">{{audios.length}}</span>
      </div>
    </div>

    <div class="nm-sheet" @click.stop v-show="isShowSheet">
      <div class="s-head">
        <span>播放列表</span>
        <div class="h-act">
          <nmp-icon icon="delete" size="14" @click="clearSheet"></nmp-icon>
          <nmp-icon icon="close" size="14" @click="isShowSheet = false"></nmp-icon>
        </div>
      </div>
      <div class="s-body" :style="`max-height: ${sheetHeight}px`">
        <div class="s-row" :class="{focus: currentIndex === i}" @dblclick="currentIndex = i" v-for="(audio, i) of audios">
          <div class="s-cell">
            <nmp-icon icon="play" size="14" v-if="currentIndex === i"></nmp-icon>
          </div>
          <div class="s-cell cell-name">
            <span>{{audio.name}}</span>
          </div>
          <div class="s-cell cell-author">{{audio.author}}</div>
          <div class="s-cell cell-delete">
            <nmp-icon icon="delete" size="14" @click="remove(i)"></nmp-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {isEmptyObject} from 'lovue/dist/utils.esm'
  import './js/iconfont'
  import './less/style.less'
  import Icon from './components/Icon.vue'
  import Progress from './components/Progress.vue'
  import {secondsToReadable} from './js/utils'

  export default {
    name: 'v-nm-player',
    data() {
      return {
        audioElem: {},
        currentAudio: {},
        currentIndex: 0,
        paused: true,
        duration: '00:00',
        playedTime: '00:00',
        playedRatio: 0,
        loadedRatio: 0,
        volume: 0,
        playModes: ['play-circle-list', 'play-circle-single', 'play-random'],
        playMode: 0,
        speakerIcon: 'speaker',
        isShowVolumeSlider: false,
        isShowSheet: false,
        canPlay: !this.audios.length
      }
    },
    props: {
      preload: Boolean,
      audios: Array,
      asyncPlay: Function,
      defaultCover: String,
      pos: String,
      unique: {
        type: String,
        'default': 'id'
      },
      sheetHeight: Number,
      defaultPlayMode: Number,
      defaultVolume: Number
    },
    computed: {
      playModeIcon() {
        return this.playModes[this.playMode]
      }
    },
    watch: {
      currentIndex: 'updateCurrentAudio'
    },
    components: {
      [Icon.name]: Icon,
      [Progress.name]: Progress
    },
    methods: {
      init() {
        const audio = this.$el.querySelector('audio')
        this.defaultVolume && (audio.volume = this.defaultVolume)

        this.audioElem = audio
        this.volume = audio.volume

        /* Bind audio events */
        audio.addEventListener('canplay', this.play)
        audio.addEventListener('canplaythrough', () => {
          this.loadedRatio = 1
        })
        audio.addEventListener('durationchange', () => {
          this.duration = secondsToReadable(audio.duration)
        })
        audio.addEventListener('pause', () => this.paused = true)
        audio.addEventListener('play', () => this.paused = false)
        audio.addEventListener('ended', this.playEndHandler)
        audio.addEventListener('timeupdate', () => {
          this.playedTime = secondsToReadable(audio.currentTime)
          this.playedRatio = audio.currentTime / audio.duration
        })
        audio.addEventListener('progress', () => {
          this.loadedRatio = audio.buffered.length ? audio.buffered.end(audio.buffered.length - 1) / audio.duration : 0
        })
        audio.addEventListener('volumechange', () => {
          this.volume = audio.volume
        })
      },
      async updateCurrentAudio(index) {
        const audio = this.audios[index]

        if (audio === undefined) return this.paused = true
        if (audio.url) {
          this.currentAudio = audio
          return
        }

        if (this.asyncPlay) await this.asyncPlay(index)

        this.currentAudio = audio
      },
      addAudio(audio) {
        const { unique } = this
        if (audio[unique] === undefined) return

        if (this.audios.length === 0) {
          this.audios.push(Object.assign({}, audio))
          this.canPlay = false
          this.updateCurrentAudio(0)
        }

        const index = this.audios.findIndex($audio => $audio[unique] === audio[unique])
        if (index > -1) return

        this.audios.push(Object.assign({}, audio))
      },
      async playNewAudio(audio) {
        const {unique} = this
        if (audio[unique] === undefined) return

        const index = this.audios.findIndex($audio => $audio[unique] === audio[unique])
        if (index === -1) {
          this.audios.unshift(Object.assign({}, audio))
          this.playIndex(0)
          return
        }

        this.playIndex(index)
      },
      async playIndex(index) {
        if (this.currentIndex === index) {
          this.updateCurrentAudio(index)
        } else {
          this.currentIndex = index
        }
      },
      play() {
        if (!this.canPlay) return this.canPlay = true
        if (isEmptyObject(this.currentAudio)) return

        const promise = this.audioElem.play()
        if (promise) {
          promise.catch(e => {
            if (e.name === 'NotAllowedError') this.pause()
          })
        }
      },
      pause() {
        this.audioElem.pause()
      },
      prev() {
        if (this.currentIndex === 0) {
          this.currentIndex = this.audios.length - 1
        } else {
          this.currentIndex--
        }
      },
      next() {
        if (this.currentIndex === this.audios.length - 1) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      },
      clickAudioBar(ratio) {
        this.audioElem.currentTime = this.audioElem.duration * ratio
      },
      clickVolumeBar(ratio) {
        this.audioElem.volume = ratio
      },
      changePlayMode() {
        if (this.playMode === 2) return this.playMode = 0
        this.playMode++
      },
      playEndHandler() {
        const { playMode } = this
        if (playMode === 0) this.next()
        if (playMode === 1) this.audioElem.load()
        if (playMode === 2) {
          const random = Math.floor(Math.random() * this.audios.length)
          if (random === this.currentIndex) {
            this.next()
          } else {
            this.currentIndex = random
          }
        }
      },
      toggleMute() {
        this.audioElem.muted = !this.audioElem.muted
        this.speakerIcon = this.audioElem.muted ? 'speaker-mute' : 'speaker'
      },
      toggleShowVolume() {
        this.isShowSheet = false
        this.isShowVolumeSlider = !this.isShowVolumeSlider
      },
      toggleShowSheet() {
        this.isShowSheet = !this.isShowSheet
        this.isShowVolumeSlider = false
      },
      remove(i) {
        if (this.currentIndex === i) this.next()
        this.audios.splice(i, 1)
        if (this.audios.length <= 1) this.isShowSheet = false
      },
      clearSheet() {
        this.audios.splice(0, this.audios.length)
        this.currentAudio = {}
        this.paused = true
        this.duration = '00:00'
        this.playedTime = '00:00'
        this.playedRatio = 0
        this.audioElem.load()
        this.isShowSheet = false
      }
    },
    created() {
      this.defaultPlayMode && (this.playMode = this.defaultPlayMode)
    },
    mounted() {
      this.init()

      this.updateCurrentAudio(this.currentIndex)
      window.addEventListener('click', () => {
        this.isShowSheet = false
        this.isShowVolumeSlider = false
      })
    }
  }
</script>
