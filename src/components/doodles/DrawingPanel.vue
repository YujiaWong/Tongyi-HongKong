<template>
  <div id="DrawingPanel" class="relative">
    <div
      class="w-[350px] flex flex-col justify-start items-center gap-2 bg-[#202532] rounded-2xl border border-gray-500 p-2"
    >
      <div
        class="ratioHolder group"
        @mouseenter="showRatioMenu"
        @mouseleave="unshowRatioMenu"
      >
        <button class="text-gray-300 flex items-center py-2">
          画板比例 &nbsp;<span class="pr-2"> {{ ratio }}</span
          ><DownOutlined class="downArrow" />
        </button>
        <div
          v-show="showMenu"
          class="ratioPanel w-[30%] bg-[#202532] p-1 rounded-md text-white flex flex-col justify-center items-center gap-2 border border-gray-500 absolute top-[60px]"
        >
          <button
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
            @click="ratio11"
          >
            1 : 1
          </button>
          <button
            @click="ratio169"
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
          >
            16 : 9
          </button>
          <button
            @click="ratio916"
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
          >
            9 : 16
          </button>
        </div>
      </div>
      <div
        ref="bgBoard"
        class="w-[340px] h-[340px] bg-[#141822] flex justify-center items-center"
      >
        <button
          @click="turnOnPopOutBox"
          ref="clickToDrawBtn"
          class="bg-transparent border border-gray-500 rounded-3xl p-2 px-10 text-gray-500 hover:text-gray-200 hover:border-gray-200"
        >
          点击进入涂鸦
        </button>
      </div>
      <div
        class="w-[348px] h-[48px] bg-[#141822] flex justify-between items-center mb-1 px-2"
      >
        <button
          @click="turnOnPopOutBox"
          class="bg-gray-600 rounded-2xl p-1 px-4 text-gray-300 text-[12px] flex items-center gap-2"
        >
          <EditOutlined /><span>进入涂鸦</span>
        </button>
        <button
          ref="clearAllBtn"
          @click="clearCanvas"
          class="bg-[#2d3240] rounded-2xl p-[2px] px-4 text-gray-600 flex items-center gap-2"
        >
          <CloseCircleOutlined /><span>清空</span>
        </button>
      </div>
      <div
        class="bg-[#141822] w-[96%] h-[40px] rounded-sm flex justify-between items-center px-4"
      >
        <input
          type="text"
          placeholder="请输入与涂鸦匹配的文字描述"
          class="bg-transparent p-2s placeholder:text-gray-500 w-[70%] text-white focus:outline-none"
        />
        <div
          class="styleHolder"
          @mouseenter="showStyleBoard"
          @mouseleave="unshowStyleBoard"
        >
          <button
            class="styleBtn flex justify-center items-center gap-2 text-white pl-6 border-l-2 border-gray-500"
          >
            <span>油画</span><DownOutlined class="styleChoose" />
          </button>
          <div
            v-show="styleBoard"
            class="styleBoard w-[220px] bg-[#2e3546] rounded-md p-2 flex justify-start items-center gap-2 flex-wrap absolute bottom-[-100px] left-[150px]"
          >
            <button
              class="bg-gray-700 rounded-sm text-xs text-gray-400 border border-transparent focus:border-[rgb(72,72,237)]"
            >
              <img src="dog.jpg" class="w-[60px] rounded-sm overflow-hidden" />
              <span class="py-3">扁平插画</span>
            </button>
            <button
              class="bg-gray-700 rounded-sm text-xs text-gray-400 border border-transparent focus:border-[rgb(72,72,237)]"
            >
              <img src="dog.jpg" class="w-[60px] rounded-sm overflow-hidden" />
              <span class="py-3">油画</span>
            </button>
            <button
              class="bg-gray-700 rounded-sm text-xs text-gray-400 border border-transparent focus:border-[rgb(72,72,237)]"
            >
              <img src="dog.jpg" class="w-[60px] rounded-sm overflow-hidden" />
              <span class="py-3">油画</span>
            </button>
            <button
              class="bg-gray-700 rounded-sm text-xs text-gray-400 border border-transparent focus:border-[rgb(72,72,237)]"
            >
              <img src="dog.jpg" class="w-[60px] rounded-sm overflow-hidden" />
              <span class="py-3">油画</span>
            </button>
            <button
              class="bg-gray-700 rounded-sm text-xs text-gray-400 border border-transparent focus:border-[rgb(72,72,237)]"
            >
              <img src="dog.jpg" class="w-[60px] rounded-sm overflow-hidden" />
              <span class="py-3">油画</span>
            </button>
          </div>
        </div>
      </div>
      <button
        class="w-[90%] py-2 rounded-3xl bg-[#624AFF] text-white mt-4 mb-2 text-lg"
      >
        生成涂鸦画作
      </button>
    </div>
  </div>
  <!-- ----------------------------------------弹出涂鸦窗口------------------------------------ -->
  <div
    v-show="showPopOutBox"
    class="flex flex-col justify-center items-center gap-8 w-screen h-screen bg-black/50 absolute top-0 left-0 backdrop-blur-xl z-10"
  >
    <button
      @click="turnOffPopOutBox"
      class="text-white text-lg bg-slate-500/50 w-[50px] h-[50px] rounded-full m-5 absolute right-0 top-0"
    >
      ×
    </button>
    <div
      class="flex flex-col justify-start items-center rounded-2xl border border-gray-500 text-gray-400 bg-[#2e3546]"
    >
      <div
        class="ratioHolder group"
        @mouseenter="showRatioMenu"
        @mouseleave="unshowRatioMenu"
      >
        <button class="text-gray-300 flex items-center py-2">
          画板比例 &nbsp;<span class="pr-2"> {{ ratio }}</span
          ><DownOutlined class="downArrow" />
        </button>
        <div
          v-show="showMenu"
          class="ratioPanel w-[100px] bg-[#202532] p-1 rounded-md text-white flex flex-col justify-center items-center gap-2 border border-gray-500 absolute top-[170px]"
        >
          <button
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
            @click="ratio11"
          >
            1 : 1
          </button>
          <button
            @click="ratio169"
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
          >
            16 : 9
          </button>
          <button
            @click="ratio916"
            class="p-2 w-[80%] hover:bg-gray-600 focus:bg-purple-400/10 focus:text-[rgb(72,72,237)]"
          >
            9 : 16
          </button>
        </div>
      </div>
      <canvas id="canvas" ref="canvas" width="498" height="500"></canvas>
    </div>
    <div id="buttons" class="flex justify-around items-center gap-6">
      <div
        class="flex justify-between items-center gap-5 rounded-3xl p-2 px-4 bg-[#2e3546] text-gray-300 relative"
      >
        <button class="pencilBtn" @click="isEraser = false">
          <FormOutlined class="!text-gray-300 !pb-1" />
        </button>
        <div
          class="pencilPopOut text-gray-300 bg-[#2e3546] p-1 absolute top-[-40px] left-1"
        >
          画笔
        </div>
        <button class="eraserBtn" @click="isEraser = true">
          <FormatPainterOutlined class="!text-gray-300 !pb-1" /></button
        >|
        <div
          class="eraserPopOut text-gray-300 bg-[#2e3546] p-1 absolute top-[-40px] left-10"
        >
          擦除
        </div>
        <button class="redoBtn" @click="redo">
          <RedoOutlined class="!text-gray-300 !pb-1" />
        </button>
        <div
          class="redoPopOut text-gray-300 bg-[#2e3546] p-1 absolute top-[-40px] left-[98px]"
        >
          重做
        </div>
        <button class="undoBtn" @click="undo">
          <UndoOutlined class="!text-gray-300 !pb-1" /></button
        >|
        <div
          class="undoPopOut text-gray-300 bg-[#2e3546] p-1 absolute top-[-40px] left-[132px]"
        >
          撤销
        </div>
        <button class="clearBtn" @click="clearCanvas">
          <ClearOutlined class="!text-gray-300 !pb-1" />
        </button>
        <div
          class="clearPopOut w-[62px] text-gray-300 bg-[#2e3546] p-1 absolute top-[-40px] left-[176px]"
        >
          清空画布
        </div>
      </div>
      <button
        class="flex justify-center items-center gap-2 bg-[#2e3546] text-gray-300 p-[9px] px-4 rounded-3xl"
      >
        <UploadOutlined /><span>上传涂鸦</span>
      </button>
      <button
        @click="finishDrawing"
        class="text-gray-300 bg-[rgb(72,72,237)] p-2 px-8 rounded-3xl"
      >
        完成涂鸦
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  DownOutlined,
  EditOutlined,
  CloseCircleOutlined,
  FormOutlined,
  UploadOutlined,
  RedoOutlined,
  UndoOutlined,
  ClearOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons-vue";
import { ref, nextTick } from "vue";
let ratio = ref("1 : 1");
let showMenu = ref(false);
let styleBoard = ref(false);
let showPopOutBox = ref(false);

//--------------canvas绘画逻辑---------------

let history = []; // 存放每次绘制后的图像快照
let redoStack = []; // 存放被撤销的操作，用于重做
const isEraser = ref(false);

const canvas = ref(null);
let drawing = false;
let startPoint = { x: undefined, y: undefined };

function drawLines(startX, startY, newX, newY) {
  const ctx = canvas.value.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(startX, startY);
  ctx.lineTo(newX, newY);
  ctx.stroke();
  ctx.closePath();
}

function showRatioMenu() {
  showMenu.value = true;
  clearTimeout(timer); //重新计时器，确保500ms是每次show方法执行全新的，而不是一次性总计500ms
}
let timer = null;
function unshowRatioMenu() {
  timer = setTimeout(() => {
    showMenu.value = false;
  }, 500);
}

let styleTimer = null;
function showStyleBoard() {
  styleBoard.value = true;
  clearTimeout(styleTimer);
}
function unshowStyleBoard() {
  styleTimer = setTimeout(() => {
    styleBoard.value = false;
  }, 500);
}
function turnOffPopOutBox() {
  showPopOutBox.value = false;
}
function turnOnPopOutBox() {
  showPopOutBox.value = true;
  initialCanvas();
}
function initialCanvas() {
  nextTick(() => {
    const ctx = canvas.value?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
    }

    // 获取 Canvas 的实际像素尺寸和显示尺寸的比例
    const getScale = () => ({
      x: canvas.value.width / canvas.value.clientWidth,
      y: canvas.value.height / canvas.value.clientHeight,
    });

    canvas.value.onmousedown = (e) => {
      const scale = getScale();
      drawing = true;
      startPoint = {
        x: e.offsetX * scale.x,
        y: e.offsetY * scale.y,
      };
    };

    canvas.value.onmousemove = (e) => {
      if (!drawing) return;
      const scale = getScale();
      const newX = e.offsetX * scale.x;
      const newY = e.offsetY * scale.y;

      if (isEraser.value) {
        erase(startPoint.x, startPoint.y, newX, newY);
      } else {
        drawLines(startPoint.x, startPoint.y, newX, newY);
      }
      startPoint = { x: newX, y: newY };
    };

    canvas.value.onmouseup = () => {
      drawing = false;
      saveState();
    };
  });
}
//----------保存画笔状态到stock里--------------
function saveState() {
  const ctx = canvas.value.getContext("2d");
  const imageData = ctx.getImageData(
    0,
    0,
    canvas.value.width,
    canvas.value.height
  );
  history.push(imageData);
  redoStack = []; // 新操作后，重做栈清空
}
//--------------橡皮擦功能-----------
function erase(startX, startY, newX, newY) {
  const ctx = canvas.value.getContext("2d");

  ctx.globalCompositeOperation = "destination-out"; // 擦除效果
  ctx.lineWidth = 20; // 可以设大一点方便擦除
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(newX, newY);
  ctx.stroke();
  ctx.closePath();

  ctx.globalCompositeOperation = "source-over"; // 恢复默认模式
}
// ---------------撤销功能---------------
function undo() {
  if (history.length <= 0) return;

  const previousState = history.pop(); // 取出上一次的状态
  redoStack.push(previousState); // 放入重做栈

  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // 清空当前画布

  if (history.length > 0) {
    ctx.putImageData(history[history.length - 1], 0, 0); // 恢复上一次的状态
  }
}
// -------------------重做功能------------
function redo() {
  if (redoStack.length <= 0) return;

  const nextState = redoStack.pop(); // 取出最近被撤销的状态
  history.push(nextState); // 放回历史栈

  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // 清空当前画布
  ctx.putImageData(nextState, 0, 0); // 恢复该状态
}
// -----------清空功能-----------------
function clearCanvas() {
  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  history = []; // 清空历史
  redoStack = []; // 清空重做栈
  bgBoard.value.style.backgroundImage = "";
  clickToDrawBtn.value.style.display = "block"; //点击涂鸦的按钮复原
}

//--------- 保存涂鸦图片导出  ------------
function exportCanvasToImage() {
  const canvasEl = canvas.value;
  const dataURL = canvasEl.toDataURL("image/png"); // 得到 base64 数据
  return dataURL;
}

const bgBoard = ref(null);
const clickToDrawBtn = ref(null);
const clearAllBtn = ref(null);
//----------- 涂鸦图片展示在面板上  ------------
function finishDrawing() {
  const imageData = exportCanvasToImage();
  //const canvasRatio = canvas.value.width / canvas.value.height;
  const boardElement = bgBoard.value;

  // 根据当前设置的比例来动态调整bgBoard的尺寸
  if (ratio.value === "1 : 1") {
    // 对于1:1比例
    boardElement.style.width = "340px";
    boardElement.style.height = "340px";
  } else if (ratio.value === "16 : 9") {
    // 对于16:9比例
    boardElement.style.width = "340px";
    boardElement.style.height = "202px";
  } else if (ratio.value === "9 : 16") {
    // 对于9:16比例
    boardElement.style.width = "202px";
    boardElement.style.height = "340px";
  }
  // 如果canvas的宽高比与选择的比例不一致，则使用cover来保证图像覆盖整个区域
  // 否则，可以根据实际情况调整backgroundSize和backgroundPosition
  boardElement.style.backgroundImage = `url(${imageData})`;
  boardElement.style.backgroundSize = "cover"; // 使用cover来确保没有空白或裁剪
  boardElement.style.backgroundPosition = "center";

  clickToDrawBtn.value.style.display = "none"; // 点击涂鸦的按钮消失
  clearAllBtn.value.style.color = "white";
  turnOffPopOutBox(); // 关闭弹窗
}

function ratio11() {
  bgBoard.value.style.width = "340px";
  bgBoard.value.style.height = "340px";
  canvas.value.style.height = "498px";
  canvas.value.style.width = "498px";
  ratio.value = "1 : 1";
  clearCanvas();
}
function ratio169() {
  bgBoard.value.style.width = "340px";
  bgBoard.value.style.height = "192px";
  canvas.value.style.width = "888px";
  canvas.value.style.height = "498px";
  ratio.value = "16 : 9";
  clearCanvas();
}
function ratio916() {
  bgBoard.value.style.width = "192px";
  bgBoard.value.style.height = "340px";
  canvas.value.style.width = "281px";
  canvas.value.style.height = "498px";
  ratio.value = "9 : 16";
  clearCanvas();
}
</script>

<style scoped>
.downArrow {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.ratioHolder:hover .downArrow {
  transform: rotate(180deg);
}
.styleChoose {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}
.styleHolder:hover .styleChoose {
  transform: rotate(180deg);
}
#canvas {
  background-color: #141822;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
.pencilPopOut {
  display: none;
}
.pencilBtn:hover + .pencilPopOut {
  display: block;
}
.eraserPopOut {
  display: none;
}
.eraserBtn:hover + .eraserPopOut {
  display: block;
}
.undoPopOut {
  display: none;
}
.undoBtn:hover + .undoPopOut {
  display: block;
}
.redoPopOut {
  display: none;
}
.redoBtn:hover + .redoPopOut {
  display: block;
}
.clearPopOut {
  display: none;
}
.clearBtn:hover + .clearPopOut {
  display: block;
}
</style>
