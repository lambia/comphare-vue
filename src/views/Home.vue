<template>
  <div>
    <big-grid :payload="payload" :index="index" :blockSize="blockSize" />
  </div>
</template>

<script>
import bigGrid from '@/components/bigGrid.vue'

export default {
    name: 'home',
    components: {
      bigGrid
    },
    data: function() {
        return {
            payload: ["QWERTY","ABCDE"],
            index: 0,
            blockSize: 3
        }
    }
}
</script>
