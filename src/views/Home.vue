<template>
  <div>
    <input type="range" min="1" max="8" class="slider" v-model="localChunkSize" @input="test">
    <br />
    <big-grid />
  </div>
</template>

<script>
import bigGrid from '@/components/bigGrid.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'home',
    components: {
      bigGrid
    },
    data: function() {
        return {
          localChunkSize: null,
        }
    },
    beforeMount() {
        this.localChunkSize = this.chunkSize;
    },
    computed: {
        ...mapState([
            'fileArray',
            'fileIndex',
            'chunkSize'
        ])
    },
    methods: {
        ...mapMutations([
            'changeFileIndex',
            'changeChunkSize'
        ]),
      test(e) {
        this.changeChunkSize( this.localChunkSize );
      }
    }
}
</script>