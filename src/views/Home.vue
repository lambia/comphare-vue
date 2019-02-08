<template>
  <div>
    <big-grid :n="23" />
  </div>
</template>

<script>
import bigGrid from '@/components/bigGrid.vue'

export default {
  name: 'home',
  components: {
    bigGrid
  }
}
</script>
