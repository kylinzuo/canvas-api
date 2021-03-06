export function createCanvas(id, canvasID = 'canvas') {
  let parent = document.querySelector(`#${id}`)
  let width = parent.clientWidth;
  let height = parent.clientHeight;
  let canvas = document.createElement('canvas')
  canvas.setAttribute('id', canvasID)
  canvas.setAttribute('width', width)
  canvas.setAttribute('height', height)
  parent.appendChild(canvas)
  return {
    canvas: canvas,
    width: width,
    height: height
  }
}

//将utils定义为window对象下的一个属性，属性值为对象
window.utils = {};

//在utils对象上定义捕获坐标的方法
window.utils.captureMouse = function(element){
//定义一个名为mouse的对象
  let mouse = {x:0,y:0};
    
//为元素绑定mousemove事件
element.addEventListener('mousemove',function(event){
  let x,y;
  
  //获取鼠标位于当前屏幕的位置， 并作兼容处理
  if(event.pageX||event.pageY){
    x = event.pageX;
    y = event.pageY;
  }else{
    x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
  }
  //将当前的坐标值减去元素的偏移位置，即为鼠标位于当前canvas的位置
  x -= element.offsetLeft;
  y -= element.offsetTop;

  mouse.x = x;
  mouse.y = y;
},false);
  //返回值为mouse对象
  return mouse;
}

window.utils.captureTouch = function (element) {
  let touch = {
    x: null,
    y: null,
    isPressed: false,
    event: null
  }
  let body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft,
      offsetTop = element.offsetTop;
        
  // 绑定touchstart事件
  element.addEventListener('touchstart', function (event) {
    touch.isPressed = true;
    touch.event = event;
  }, false)
    
  // 绑定touchend事件
  element.addEventListener('touchend', function (event) {
    touch.isPressed = false;
    touch.x = null;
    touch.y = null;
    touch.event = event;
  }, false)
  
  //绑定touchmove事件
  element.addEventListener('touchmove', function (event) {
    let x, y,
        touch_event = event.touches[0]; //第一次touch

    if (touch_event.pageX || touch_event.pageY) {
      x = touch_event.pageX;
      y = touch_event.pageY;
    } else {
      x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
      y = touch_event.clientY + body_scrollTop + element_scrollTop;
    }
    //剪去偏移量
    x -= offsetLeft;
    y -= offsetTop;

    touch.x = x;
    touch.y = y;
    touch.event = event;
  }, false);
  //返回touch对象
  return touch;
};

//动画循环
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 17 /*~ 1000/60*/);
    });
}

//动画循环取消
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
    window.clearTimeout);
}

// 检测碰撞
export function boundingBoxCollide(object1, object2) {
  let left1 = object1.x
  let left2 = object2.x
  let right1 = object1.x + object.width
  let right2 = object2.x + object.width

  let top1 = object1.y
  let top2 = object2.y
  let bottom1 = object1.y + object1.height
  let bottom2 = object2.y + object2.height

  if(bottom1 < top2) return false
  if(top1 > bottom2) return false
  if(right1 < left2) return false
  if(left1 > right2) return false
  return true

}