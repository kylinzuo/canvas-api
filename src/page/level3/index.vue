<template>
  <div class="level" id='chartContainer'></div>
</template>

<script>
import renderChart from '../../chart/renderChart3'
export default {
  name: 'level3',
  data () {
    return {
      title: 'level'
    }
  },
  mounted () {
    renderChart('chartContainer')
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
