export default function (ctx) {
  let width = 800
  let height = 800
  renderChart()

  function renderChart () {
    // 练习画布变换
    // let gr = ctx.createLinearGradient(0,0,100,0)
    // gr.addColorStop(0, '#f00')
    // gr.addColorStop(0.5, '#0f0')
    // gr.addColorStop(1, '#f00')
    // ctx.fillStyle = gr
    // ctx.fillRect(0, 0, 100, 100)
    // ctx.fillRect(0, 100, 50, 100)
    // ctx.fillRect(0, 200, 200, 100)

    // ctx.strokeStyle = gr
    // ctx.strokeRect(0, 300, 100, 100)
    // ctx.strokeRect(0, 400, 50, 100)
    // ctx.strokeRect(0, 500, 200, 100)

    let rgr = ctx.createRadialGradient(50, 50, 25, 100, 100, 100)
    rgr.addColorStop(0, '#f00')
    rgr.addColorStop(0.5, '#0f0')
    rgr.addColorStop(1, '#f00')
    ctx.fillStyle = rgr
    ctx.fillRect(0, 0, 200, 200)
    ctx.strokeStyle = '#000'
    ctx.arc(50, 50, 25, 0, 2 * Math.PI, false)
    ctx.stroke()
    ctx.arc(100, 100, 100, 0, 2 * Math.PI, false)
    ctx.stroke()
  }
}