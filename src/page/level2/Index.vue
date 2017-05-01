<template>
  <div class="level">
    <canvas id='myCanvas2' width="800px" height="800px"></canvas>
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
    console.log('hello level2')
    let param = {
      id: 'myCanvas2',
      mode: 2
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
#myCanvas2 {
 border: 1px solid #888;
}
</style>
