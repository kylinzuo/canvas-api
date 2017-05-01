import { createCanvas } from './util' 
export default function (id) {
  let { canvas, width, height} = createCanvas(id, 'canvas')
  let context = canvas.getContext('2d')
  let centerX = width / 2
  let centerY = height / 2
  let w = width
  let h = height

  let mouse = utils.captureMouse(canvas);
  console.log('mouse', mouse)
  //为canvas绑定mousedown事件，当鼠标按下的时候打印出当前鼠标相对于canvas的坐标值
  canvas.addEventListener('mousedown',function(event){
    console.log("x:" +mouse.x +",y:" + mouse.y);
    console.log('mouse', mouse)
  });
  /**
   * 开始绘图
   */
  //初始化
  var clearColor = 'rgba(0, 0, 0, .1)', //用于绘制渐变阴影
      wordColor = "#33ff33", //文字颜色
      words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
      wordsArr = words.split(''), //将文字拆分进一个数组
      font_size = 16,  //字体大小
      clumns = w / font_size, //文字降落的列数
      drops = [];

  for(var i=0; i<clumns; i++){
        drops[i] = 1;
      }
  

  function renderScreen () {
    // context.clearRect(0, 0, width, height)
    context.fillStyle = clearColor;
    context.fillRect(0, 0, w, h);
    context.save();
    context.fillStyle = wordColor;
    context.font = font_size + "px arial";
    //核心
    for (var i = 0; i < drops.length; i++){
      var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      context.fillText(text, i * font_size, drops[i] * font_size);
      if (drops[i] * font_size > h && Math.random() > 0.98){
          drops[i] = 0;
      }
      drops[i]++;
    }
    context.restore();
  }

  (function startup () {
    // window.setTimeout(gameLoop, 1000)
    window.requestAnimationFrame(startup)
    renderScreen()
  }())
}