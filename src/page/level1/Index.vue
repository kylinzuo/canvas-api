<template>
  <div class="level">
    <canvas id='myCanvas1' width='800px' height="800px"></canvas>
  </div>
</template>

<script>
import RenderChart from '../../chart/main'
export default {
  name: 'hello',
  data () {
    return {
      title: 'level1',
      canvas: null
    }
  },
  mounted () {
    console.log('hello level1')
    let param = {
      id: 'myCanvas1',
      mode: 1
    }
    this.canvas = new RenderChart(param)
  }
}
</script>

<style scoped>
.level {
  position: absolute;
  top: 100px;
  left: 0px;
  bottom: 0px;
  width: 100%;
}
#myCanvas1 {
 border: 1px solid #888;
}
</style>
