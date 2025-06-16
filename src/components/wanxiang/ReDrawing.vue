<template>
  <div id="ReDrawing" class="relative">
    <a-button type="primary" @click="showModal">ReDrawing</a-button>
    <a-modal
      class="custom-modal"
      v-model:visible="visible"
      title=""
      :closable="false"
      :footer="null"
      :centered="true"
      width="1000px"
    >
      <div class="content flex">
        <!-- 左侧Canvas区域 -->
        <div class="left-panel relative" ref="canvasContainer">
          <canvas
            ref="board"
            class="w-full h-full bg-slate-200"
            :width="canvasWidth"
            :height="canvasHeight"
          ></canvas>

          <!-- 操作工具栏 -->
          <div
            class="toolbar absolute top-[10px] left-4 flex ml-[40px] !gap-[20px]"
          >
            <div class="tool-group !flex !gap-0 relative">
              <a-popover>
                <template #content>拖拽 </template>
                <a-button>
                  <RotateRightOutlined class="text-lg" />
                </a-button>
              </a-popover>
              <!-- <p
                class="p-2 rounded-lg shadow-md bg-white absolute top-[-30px] left-0"
              >
                拖拽
              </p> -->
              <a-popover>
                <template #content>放大</template>
                <a-button @click="zoomIn">
                  <ZoomInOutlined class="text-lg" />
                </a-button>
              </a-popover>
              <a-popover>
                <template #content>缩小</template>
                <a-button @click="zoomOut">
                  <ZoomOutOutlined class="text-lg" />
                </a-button>
              </a-popover>
              <a-popover>
                <template #content>重置缩放</template>
                <a-button>
                  <RetweetOutlined class="text-lg" />
                </a-button>
              </a-popover>
            </div>
            <div class="tool-group !flex !gap-0">
              <a-popover>
                <template #content>矩形圈画</template>
                <a-button @click="toggleFullscreen">
                  <ExpandOutlined class="text-md" />
                </a-button>
              </a-popover>
              <a-popover>
                <template #content>画笔</template>
                <a-button>
                  <EditOutlined class="text-lg" />
                </a-button>
              </a-popover>
              <a-popover>
                <template #content>橡皮</template>
                <a-button>
                  <HighlightOutlined class="text-lg" />
                </a-button>
              </a-popover>
            </div>
            <div class="tool-group !flex !gap-0">
              <a-popover>
                <template #content>重做</template>
                <a-button @click="redo"
                  ><RedoOutlined class="text-lg"
                /></a-button>
              </a-popover>

              <a-button @click="resetDrawing" class="text-[16px]"
                >重置</a-button
              >

              <a-popover>
                <template #content>撤销</template>
                <a-button @click="undo"
                  ><UndoOutlined class="text-lg"
                /></a-button>
              </a-popover>
            </div>
          </div>

          <span class="draw-hint"> 请在图中涂出需要重绘的部分 </span>
        </div>

        <!-- 右侧控制区域 -->
        <div class="right-panel">
          <span class="font-bold">重绘后的全图完整文字描述</span>
          <div class="text-editor">
            <textarea
              v-model="textContent"
              placeholder="请输入..."
              class="text-input"
            />
            <div class="text-counter flex justify-center items-center">
              <span class="mt-[5px]">{{ textContent.length }}/800</span>
              <button @click="clearText">
                <CloseCircleOutlined />
              </button>
            </div>
          </div>
          <button class="generate-btn" @click="generateImage">重绘画作</button>
        </div>
      </div>
    </a-modal>

    <!-- 关闭按钮 -->
    <button v-if="visible" @click="handleClose" class="close-btn">×</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import {
  CloseOutlined,
  UndoOutlined,
  RedoOutlined,
  RetweetOutlined,
  RotateRightOutlined,
  ZoomOutOutlined,
  CloseCircleOutlined,
  ZoomInOutlined,
  EditOutlined,
  HighlightOutlined,
  ExpandOutlined,
} from "@ant-design/icons-vue";

// 模态框控制
const visible = ref(false);
const showModal = () => {
  visible.value = true;
  nextTick(initCanvas);
};
const handleClose = () => (visible.value = false);

// 文本内容
const textContent = ref("");
const clearText = () => (textContent.value = "");

// Canvas相关
const board = ref<HTMLCanvasElement | null>(null);
const canvasContainer = ref<HTMLElement | null>(null);
const canvasWidth = ref(700);
const canvasHeight = ref(650);
const zoomLevel = ref(1);
const rotation = ref(0);

// 绘图状态
const painting = ref(false);
const startPoint = ref({ x: 0, y: 0 });
const drawingHistory = ref<ImageData[]>([]);
const historyIndex = ref(-1);

// 创建纹理图案
const patternCanvas = document.createElement("canvas");
patternCanvas.width = 10;
patternCanvas.height = 10;
const patternCtx = patternCanvas.getContext("2d");
if (patternCtx) {
  patternCtx.fillStyle = "rgb(0,0,0)";
  patternCtx.fillRect(0, 0, 5, 5);
  patternCtx.fillRect(5, 5, 5, 5);
}

// 初始化Canvas
const initCanvas = () => {
  if (!board.value) return;

  const ctx = board.value.getContext("2d");
  if (!ctx) return;

  // 加载背景图片
  const img = new Image();
  img.src = "zoo2.jpg";
  img.onload = () => {
    ctx.clearRect(0, 0, board.value!.width, board.value!.height);
    ctx.save();
    ctx.translate(board.value!.width / 2, board.value!.height / 2);
    ctx.rotate((rotation.value * Math.PI) / 180);
    ctx.scale(zoomLevel.value, zoomLevel.value);
    ctx.translate(-board.value!.width / 2, -board.value!.height / 2);
    ctx.drawImage(img, 0, 0, board.value!.width, board.value!.height);
    ctx.restore();

    // 保存初始状态到历史记录
    saveCanvasState();
  };

  // 设置绘图事件
  setupDrawingEvents();
};

// 设置绘图事件
const setupDrawingEvents = () => {
  if (!board.value) return;

  board.value.onmousedown = (e) => {
    painting.value = true;
    startPoint.value = { x: e.offsetX, y: e.offsetY };
    saveCanvasState();
  };

  board.value.onmousemove = (e) => {
    if (!painting.value) return;

    const ctx = board.value?.getContext("2d");
    if (!ctx) return;

    const pattern = ctx.createPattern(patternCanvas, "repeat");
    if (!pattern) return;

    drawLine(
      startPoint.value.x,
      startPoint.value.y,
      e.offsetX,
      e.offsetY,
      ctx,
      pattern
    );

    startPoint.value = { x: e.offsetX, y: e.offsetY };
  };

  board.value.onmouseup = () => {
    painting.value = false;
  };

  board.value.onmouseleave = () => {
    painting.value = false;
  };
};

// 绘制线条
const drawLine = (
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number,
  ctx: CanvasRenderingContext2D,
  pattern: CanvasPattern
) => {
  ctx.beginPath();
  ctx.lineWidth = 30;
  ctx.lineCap = "round";
  ctx.strokeStyle = pattern;
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
};

// 保存画布状态
const saveCanvasState = () => {
  if (!board.value) return;
  const ctx = board.value.getContext("2d");
  if (!ctx) return;

  const imageData = ctx.getImageData(
    0,
    0,
    board.value.width,
    board.value.height
  );
  drawingHistory.value = drawingHistory.value.slice(0, historyIndex.value + 1);
  drawingHistory.value.push(imageData);
  historyIndex.value = drawingHistory.value.length - 1;
};

// 撤销操作
const undo = () => {
  if (historyIndex.value <= 0) return;
  historyIndex.value--;
  restoreCanvasState();
};

// 重做操作
const redo = () => {
  if (historyIndex.value >= drawingHistory.value.length - 1) return;
  historyIndex.value++;
  restoreCanvasState();
};

// 恢复画布状态
const restoreCanvasState = () => {
  if (!board.value || historyIndex.value < 0) return;
  const ctx = board.value.getContext("2d");
  if (!ctx) return;

  ctx.putImageData(drawingHistory.value[historyIndex.value], 0, 0);
};

// 重置绘图
const resetDrawing = () => {
  if (!board.value) return;
  const ctx = board.value.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, board.value.width, board.value.height);
  initCanvas();
};

// 旋转画布
const rotateCanvas = (degrees: number) => {
  rotation.value += degrees;
  initCanvas();
};

// 缩放功能
const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 3);
  initCanvas();
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 0.5);
  initCanvas();
};

// 全屏功能
const toggleFullscreen = () => {
  if (!canvasContainer.value) return;

  if (!document.fullscreenElement) {
    canvasContainer.value.requestFullscreen().catch((err) => {
      console.error(`全屏错误: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
};

// 生成图片
const generateImage = () => {
  if (!board.value) return;

  // 这里可以添加将Canvas转换为图片的逻辑
  const imageUrl = board.value.toDataURL("image/png");
  console.log("生成的图片URL:", imageUrl);
  // 实际应用中可以将imageUrl发送到服务器或下载
};

onMounted(() => {
  // 初始化窗口大小变化监听
  window.addEventListener("resize", handleResize);
});

const handleResize = () => {
  // 可以根据窗口大小调整Canvas尺寸
};
</script>

<style scoped>
/* 模态框圆角 */
.custom-modal .ant-modal-content {
  border-radius: 16px;
  overflow: hidden;
}

/* 左侧面板 */
.left-panel {
  width: 70%;
  height: 650px;
}

/* 右侧面板 */
.right-panel {
  width: 30%;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 工具栏 */
.toolbar {
  display: flex;
  gap: 12px;
}

.tool-group {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 8px 12px;
  display: flex;
  gap: 12px;
}

.tool-group button {
  color: #666;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 绘制提示 */
.draw-hint {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 12px;
  color: #666;
  font-size: 14px;
}

/* 文本编辑器 */
.text-editor {
  background: #f8f9ff;
  border-radius: 12px;
  padding: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
}

.text-editor:hover {
  border-color: #5c5cf2;
}

.text-input {
  border: none;
  background: transparent;
  width: 100%;
  height: 180px;
  resize: none;
  outline: none;
  flex-grow: 1;
  padding: 8px;
}

.text-counter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  color: #999;
  font-size: 12px;
}

/* 生成按钮 */
.generate-btn {
  background: #5c5cf2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.generate-btn:hover {
  background: #4a4ae0;
}

/* 关闭按钮 */
.close-btn {
  position: fixed;
  top: 80px;
  right: 180px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.close-btn:hover {
  background: #f5f5f5;
  transform: scale(1.1);
}

/* 画布样式 */
canvas {
  display: block;
  cursor: crosshair;
}
</style>
