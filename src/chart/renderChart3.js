import { createCanvas } from './util' 
export default function (id) {
  let { canvas, width, height} = createCanvas(id, 'canvas')
  let context = canvas.getContext('2d')
  let centerX = width / 2
  let centerY = height / 2
  let rad = Math.PI * 2 / 100
  let speed = 0.1

  /**
   * 开始绘图
   */
  // 灰色圆
  function grayCircle () {
    context.save()
    context.beginPath()
    context.strokeStyle = '#ddd'
    context.lineWidth = 5
    context.arc(centerX, centerY, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false)
    context.stroke()
    context.closePath()
    context.restore()
  }

  function blueCircle (n) {
    context.save()
    context.beginPath()
    context.strokeStyle = '#49f'
    context.lineWidth = 5
    context.arc(centerX, centerY, 100, - Math.PI / 2 + rad * 0, - Math.PI / 2 + rad * n, false)
    context.stroke()
    context.closePath()
    context.restore()
  }

  function speedText (speed) {
    context.save()
    context.beginPath()
    context.font = '50px serif'
    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.strokeStyle = '#49f'
    let text = Math.floor(speed) + '%'
    context.strokeText(text, centerX, centerY)
    context.closePath()
    context.restore()
  }

  function renderScreen () {
    context.clearRect(0, 0, width, height)
    grayCircle()
    blueCircle(speed)
    speedText(speed)
  }

  function startup () {
    // window.setTimeout(gameLoop, 1000)
    window.requestAnimationFrame(startup)
    renderScreen()
    speed = speed >= 100 ? 0 : speed + 0.1
  }
  // 
  startup()
}