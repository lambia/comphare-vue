<template>
        <input type="text" :value="getData()" :placeholder="data" :size="chunkSize" v-bind:style="getInputStyle()" @input="onEdit" class="chunkCell">
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'littleCell',
    props: {
        data: String,
        total: Number
    },
    data: function() {
        return {

        } 
    },
    computed: {
        ...mapState([
            'fileArray',
            'fileIndex',
            'chunkSize',
            'rowChunks'
        ])
    },
    methods: {
        ...mapMutations([
            
        ]),
        getInputStyle() {
            return {
                width: this.chunkSize+"em",
                float: "left",
                clear: (false) ? "left" : "none"
            };
        },
        getData() {
            let buffer = "";
            let files = this.fileArray;
            let current = this.fileIndex;
            let myKey = this.$vnode.key;
            let size = this.chunkSize;

            //ToDo: usare chopString o subStr
            for(let i = 0; i < size; i++) {
                let localBuffer = files[current][(myKey*size)+i];
                if(localBuffer) {
                    buffer += localBuffer;
                } else if(false) {
                    //ToDo: opzione per padding
                    buffer += 0;
                }
            }

            return buffer;
        },
        onEdit() {
            
        }
    }
}
</script>

<style scoped>
.chunkCell {
    border: solid 1px transparent;
    outline: none;
    padding: 0px;
    text-align: center;
}
.chunkCell:hover {
    border: solid 1px lightgray;
}
.chunkCell:focus {
    border: solid 1px darkslategray;
}
</style>
