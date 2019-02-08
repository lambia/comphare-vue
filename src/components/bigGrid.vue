<template>
    <div>
        <little-cell v-for="(value,key) in getChunksNumber()" :key="key" />
    </div>
</template>

<script>
import littleCell from '@/components/littleCell.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'bigGrid',
    components: {
        littleCell
    },
    data: function() {
        return {
          
        }
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
        //Use for, not forEach/maps/filter
        //Use arr[i], not .push()
        //Use substr, not anything else
        //Old fashioned is better.
        //See why at https://jsperf.com/string-chopping-comparison
        chopString() {
            let _str = this.fileArray[this.fileIndex];
            let _size = this.chunkSize;

            let nChunks   = Math.ceil(_str.length / _size),
                chunks      = new Array(nChunks);

            for(let i = 0, o = 0; i < nChunks; ++i, o += _size) {
                chunks[i] = _str.substr(o, _size);
            }

            return chunks;
        },
        getChunksNumber() {
            let _str = this.fileArray[this.fileIndex];
            let _size = this.chunkSize;

            let nChunks   = Math.ceil(_str.length / _size);

            return nChunks;
        }

    }
}
</script>

<style scoped>
</style>
