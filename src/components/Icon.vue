<template>
  <svg :class="`icon icon-${icon}`" :width="size || 20" :height="size || 20" @click="$emit('click')">
    <use :xlink:href="`#nmp-icon-${icon}`"></use>
  </svg>
</template>
<script>
  export default {
    name: 'nmp-icon',
    props: {
      icon: String,
      size: String
    }
  }
</script>
