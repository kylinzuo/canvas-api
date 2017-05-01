import renderChart1 from './renderChart1'
import renderChart2 from './renderChart2'
export default class {
  constructor (param, data) {
    this.param = Object.assign({}, param)
    console.log('%c param value', 'color:#0f0', this.param)
    this.canvas = document.querySelector(`#${this.param.id}`)
    this.ctx = this.canvas.getContext('2d')
    this[`init${this.param.mode}`]()
  }
  init1 () {
    renderChart1(this.ctx)
  }
  init2 () {
    renderChart2(this.ctx)
  }
}
