<template>
    <div>
        <span v-if="!editing" @click="toggleEditing">{{data}}</span>
        <input v-else @click="toggleEditing" type="text" name="" id="" class="" :value="data" placeholder="">
    </div>
</template>

<script>
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
    methods: {
        toggleEditing() {
            //ToDo: editing deve essere del padre/store e indicare l'ID del figlio in edit
            this.editing = !this.editing;
        }
    }
}
</script>

<style scoped>
</style>
