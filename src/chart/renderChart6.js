import { createCanvas } from './util' 
export default function (id) {
  let { canvas, width, height} = createCanvas(id, 'canvas')
  let context = canvas.getContext('2d')
  let balls = []
  let ballsNum = 100
  let maxSize = 8
  let minSize = 5
  let maxSpeed = maxSize + 5
  getBalls()
  /**
   * 开始绘图
   */
  function getBalls () {
    for (let i = 0; i < ballsNum; i++) {
      let r = Math.floor(Math.random() * maxSize) + minSize
      let x = Math.max(2 * r, (Math.floor(Math.random() * width) - 2 * r))
      let y = Math.max(2 * r, (Math.floor(Math.random() * height) - 2 * r))
      let speed = maxSpeed - r
      let angle = Math.floor(Math.random() * 360)
      let rad = angle * Math.PI / 180
      let xUnit = Math.cos(rad) * speed
      let yUnit = Math.sin(rad) * speed
      let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      balls.push({x:x, y:y, r:r, speed:speed, angle:angle, rad:rad, xUnit:xUnit, yUnit:yUnit, color: color})
    }
    console.log('balls', balls)
  }
  //初始化
  function updateBall(ball) {
    ball.rad = ball.angle * (Math.PI / 180)
    ball.xUnit = Math.cos(ball.rad) * ball.speed
    ball.yUnit = Math.sin(ball.rad) * ball.speed
  }

  function renderScreen () {
    context.clearRect(0, 0, width, height)
    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i]
      if (ball.x >= width - 15 || ball.x <= 15 ) {
        ball.angle = 180 - ball.angle
        updateBall(ball)
      } else if (ball.y >= height - 15 || ball.y <= 15) {
        ball.angle = 360 - ball.angle
        updateBall(ball)
      }
      ball.x += ball.xUnit
      ball.y += ball.yUnit
      drawCircle(ball.x, ball.y, ball.r, ball.color)
    }
  }

  function drawCircle(x, y, r, color) {
    context.save()
    context.beginPath()
    context.fillStyle = color
    context.arc(x, y, r, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false)
    context.fill()
    context.closePath()
    context.restore()
  }

  function drawLine (p1, p2, color) {
    context.save()
    context.beginPath()
    context.strokeStyle = color
    context.moveTo(p1.x, p1.y)
    context.lineTo(p2.x, p2.y)
    context.stroke()
    context.restore()
  }

  (function startup () {
    // window.setTimeout(gameLoop, 1000)
    window.requestAnimationFrame(startup)
    renderScreen()
  }())
}