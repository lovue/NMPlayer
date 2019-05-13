<template>
  <div class="nm-progress" @click="clickBar">
    <div class="p-line">
      <div class="layer-1"></div>
      <div class="layer-2" :style="`width:${loadedPercentage}%;`"></div>
      <div class="layer-3" :style="`width:${playedPercentage}%;`"></div>
      <div class="p-ring" :style="`transform: translateX(${offsetX}px)`" @click.stop @mousedown="dragStart" v-if="draggable">
        <div class="r-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'nmp-progress',
    data() {
      return {
        fullWidth: 0,
        startX: 0,
        dragFlag: false
      }
    },
    props: {
      played: Number,
      loaded: Number,
      decimal: Boolean,
      type: String,
      transition: Boolean,
      draggable: Boolean,
      width: Number
    },
    computed: {
      playedPercentage() {
        if (this.decimal) {
          return Math.trunc(this.played * 10000) / 100
        } else {
          return this.played * 100 | 0
        }
      },
      loadedPercentage() {
        if (this.decimal) {
          return Math.trunc(this.loaded * 10000) / 100
        } else {
          return this.loaded * 100 | 0
        }
      },
      offsetX() {
        return this.played * this.fullWidth
      }
    },
    methods: {
      clickBar(ev) {
        this.$emit('click-bar', ev.offsetX / this.fullWidth)
      },
      dragStart(ev) {
        this.startX = ev.pageX
        this.dragFlag = true
      },
      dragging(ev) {
        if (!this.dragFlag) return

        const deltaX = ev.pageX - this.startX
        this.startX = ev.pageX

        let newOffsetX = this.offsetX + deltaX
        if (newOffsetX < 0) newOffsetX = 0
        if (newOffsetX > this.fullWidth) newOffsetX = this.fullWidth
        this.$emit('drag-bar', newOffsetX / this.fullWidth)
      }
    },
    mounted() {
      this.fullWidth = this.$el.offsetWidth
      if (this.width) this.fullWidth = this.width

      if (!this.transition) {
        this.$el.querySelector('.layer-3').style.transition = 'none'
      }

      window.addEventListener('mousemove', this.dragging)
      window.addEventListener('mouseup', ev => this.dragFlag = false)
    }
  }
</script>
