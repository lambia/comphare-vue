<template>
    <div>
        <span v-if="editingCell!=$vnode.key" @click="editCell">{{data}}</span>
        <input v-else type="text" name="" id="" class="" :value="data" placeholder="">
    </div>
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
            editing: false,
            arrayTest: []
        } 
    },
    computed: {
        ...mapState([
            'editingCell'
        ])
    },
    methods: {
        ...mapMutations([
          'changeEditing'
        ]),
        editCell() {
            this.changeEditing( this.$vnode.key );
        }
    }
}
</script>

<style scoped>
</style>
