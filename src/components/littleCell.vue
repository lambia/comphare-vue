<template>
    <div>
        <span v-if="editingCell!=$vnode.key" @click="editCell">{{data}}</span>
        <input v-else type="text" :value="data" :placeholder="data">
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
