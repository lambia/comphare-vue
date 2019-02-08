<template>
    <div>
        <span>{{n}}</span>
        <little-cell v-for="(value,key) in chopString(stringTest[currentFile], blockSize)" :key="key" :data="value" />
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
        n: Number
    },
    data: function() {
        return {
            stringTest: ["QWERTY","ABCDE"],
            currentFile: 0,
            blockSize: 2
        }
    },
    methods: {
        //Use for, not forEach/maps/filter
        //Use arr[i], not .push()
        //Use substr, not anything else
        //Old fashioned is better.
        //See why at https://jsperf.com/string-chopping-comparison
        chopString(str, blockSize) {
            var numChunks = Math.ceil(str.length / blockSize),
                chunks = new Array(numChunks);

            for(var i = 0, o = 0; i < numChunks; ++i, o += blockSize) {
                chunks[i] = str.substr(o, blockSize);
            }

            return chunks;
        },

    }
}
</script>

<style scoped>
</style>
