<template>
  <div class="level"></div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'level'
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.level {
  border: 1px solid #333;
  flex-grow: 1;
  margin: 30px;
}
</style>
