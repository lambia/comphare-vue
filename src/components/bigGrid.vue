<template>
  <div>
    <span>{{n}}</span>
  </div>
</template>

<script>
export default {
  name: 'bigGrid',
  props: {
    n: Number
  },
  data: function() {
    return {
      arrayTest: []
    } 
  }
}
</script>

<style scoped>
</style>
