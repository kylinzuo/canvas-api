import { createCanvas } from './util' 
export default function (id) {
  let { canvas, width, height} = createCanvas(id, 'canvas')
  let context = canvas.getContext('2d')
  let centerX = width / 2
  let centerY = height / 2
  let w = width
  let h = height

  /**
   * 开始绘图
   */
  //初始化

  function renderScreen () {
    // context.clearRect(0, 0, width, height)
    let img = new Image()
    img.src = '../static/images/05.jpeg'
    img.onload = function () {
      context.drawImage(img, 0, 0, 500, 497, 0, 0, w, h)
    }
    
  }

  (function startup () {
    // window.setTimeout(gameLoop, 1000)
    // window.requestAnimationFrame(startup)
    renderScreen()
  }())
}