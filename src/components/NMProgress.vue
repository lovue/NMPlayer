<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  played: number
  loaded: number
  decimal?: boolean
  type?: string
  draggable?: boolean
  width?: number
}>()
const emit = defineEmits(['click-bar', 'drag-bar'])

const fullWidth = ref(0)
const startX = ref(0)
const dragFlag = ref(false)
const rootElem = ref<HTMLDivElement | null>(null)

const playedPercentage = computed(() => {
  if (props.decimal) return Math.trunc(props.played * 10000) / 100

  return props.played * 100 | 0
})
const loadedPercentage = computed(() => {
  if (props.decimal) return Math.trunc(props.loaded * 10000) / 100

  return props.loaded * 100 | 0
})
const offsetX = computed(() => props.played * fullWidth.value)
const ringStyle = computed(() => {
  return {
    transform: `translateX(${offsetX.value}px)`
  }
})

onMounted(() => {
  if (rootElem.value === null) return

  fullWidth.value = rootElem.value.offsetWidth
  if (props.width) fullWidth.value = props.width

  window.addEventListener('mousemove', dragging)
  window.addEventListener('mouseup', dragEnd)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', dragging)
  window.removeEventListener('mouseup', dragEnd)
})

function clickBar (ev: MouseEvent) {
  emit('click-bar', ev.offsetX / fullWidth.value)
}

function dragStart (ev: MouseEvent) {
  startX.value = ev.pageX
  dragFlag.value = true
}

function dragEnd () {
  dragFlag.value = false
}

function dragging (ev: MouseEvent) {
  if (!dragFlag.value) return

  const deltaX = ev.pageX - startX.value
  startX.value = ev.pageX

  let newOffsetX = offsetX.value + deltaX
  if (newOffsetX < 0) newOffsetX = 0
  if (newOffsetX > fullWidth.value) newOffsetX = fullWidth.value

  emit('drag-bar', newOffsetX / fullWidth.value)
}
</script>

<template>
  <div class="nm-progress" ref="rootElem" @click="clickBar">
    <div class="nm-progress__line">
      <div class="layer-1"></div>
      <div class="layer-2" :style="`width:${loadedPercentage}%;`"></div>
      <div class="layer-3" :style="`width:${playedPercentage}%;`"></div>
      <div class="nm-progress_ring" :style="ringStyle" @click.stop @mousedown="dragStart" v-if="draggable">
        <div class="ring-center"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.nm-progress__line {
  position: relative;
  height: 2px;
  border-radius: var(--border-radius);

  .layer-1 {
    background-color: var(--bg-color);
    width: 100%;
    height: 100%;
  }

  .layer-2, .layer-3 {
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  .layer-2 {
    background-color: #d9d9d9;
  }

  .layer-3 {
    background-color: var(--theme-color);
  }
}

.nm-progress_ring {
  position: absolute;
  left: -8px;
  top: -7px;
  width: 16px;
  height: 16px;
  background-color: var(--white);
  border-radius: 50%;
  border: 1px solid var(--border-color);
  display: flex;

  .ring-center {
    width: 4px;
    height: 4px;
    background-color: var(--theme-color);
    border-radius: 50%;
    margin: auto;
  }
}
</style>
