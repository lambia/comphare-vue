<template>
        <!--
            <span v-if="editingCell!=$vnode.key" @click="editCell">{{data}}</span>
            <input v-else type="text" :value="data" :placeholder="data">
        -->
        <input type="text" :value="data" :placeholder="data" :size="chunkSize" :style="getInputStyle" @input="onEdit" class="chunkCell">
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'littleCell',
    props: {
        data: String
    },
    data: function() {
        return {

        } 
    },
    computed: {
        ...mapState([
            //'editingCell'
            'chunkSize'
        ])
    },
    methods: {
        ...mapMutations([
          //'changeEditing'
        ]),
        getInputStyle() {
            return { width: this.chunkSize+"em" };
        },
        onEdit() {
            
        }
        /*editCell() {
            this.changeEditing( this.$vnode.key );
        }*/
    }
}
</script>

<style scoped>
.chunkCell {
    border: solid 1px red;
    outline: none;
    float: left;
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
