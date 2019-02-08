<template>
    <div>
        <little-cell v-for="(value,key) in chopString()" :key="key" :data="value" />
    </div>
</template>

<script>
import littleCell from '@/components/littleCell.vue'

export default {
    name: 'bigGrid',
    components: {
        littleCell
    },
    props: {
        payload: String,
        blockSize: Number,
        index: Number
    },
    data: function() {
        return {
          
        }
    },
    methods: {
        //Use for, not forEach/maps/filter
        //Use arr[i], not .push()
        //Use substr, not anything else
        //Old fashioned is better.
        //See why at https://jsperf.com/string-chopping-comparison
        chopString() {
            let _str = this.payload[this.index];
            let _size = this.blockSize;

            let nChunks   = Math.ceil(_str.length / _size),
                chunks      = new Array(nChunks);

            for(let i = 0, o = 0; i < nChunks; ++i, o += _size) {
                chunks[i] = _str.substr(o, _size);
            }

            return chunks;
        },

    }
}
</script>

<style scoped>
</style>
