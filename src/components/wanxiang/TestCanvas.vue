<template>
  <div id="TestCanvas">
    <canvas ref="board" id="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const board = ref(null);
const lineStyle = [5, 10];

// 创建黑白格子图案
let patternCanvas = document.createElement("canvas");
patternCanvas.width = 10;
patternCanvas.height = 10;
let pctx = patternCanvas.getContext("2d");
//在小canvas上绘制黑白相间的图案
pctx.fillStyle = "rgb(134,134,134)";
pctx.fillRect(0, 0, 5, 5);
pctx.fillRect(5, 5, 5, 5);

let painting = false;
let startPoint = { x: undefined, y: undefined };

//绘图方法
function drawLine(xStart, yStart, xEnd, yEnd, ctx, pattern) {
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineCap = "round";
  ctx.strokeStyle = pattern;
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
}

onMounted(() => {
  // 确保 board 已经指向真实的 DOM 元素
  const canvas = board.value;
  const gridSize = 50;

  if (canvas) {
    const ctx = canvas.getContext("2d");
    //导入底图
    const img = new Image();
    img.src = "zoo4.jpg";
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 500, 500);
      // 创建图案
      var pattern = ctx.createPattern(patternCanvas, "repeat");
      //设置strokeStyle为刚刚创建的图案
      ctx.strokeStyle = pattern;
      //监听在canvas上的鼠标事件
      canvas.onmousedown = (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        startPoint = { x: x, y: y };
        painting = true;
      };
      canvas.onmousemove = (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let newPoint = { x: x, y: y };
        if (painting) {
          drawLine(
            startPoint.x,
            startPoint.y,
            newPoint.x,
            newPoint.y,
            ctx,
            pattern
          );
          startPoint = newPoint;
        }
      };
      canvas.onmouseup = () => {
        painting = false;
      };
    };
  }
});
</script>

<style scoped></style>
