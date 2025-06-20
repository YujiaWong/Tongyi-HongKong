<template>
  <!-- 单一根元素，ref 获取 DOM -->
  <div ref="container" class="w-[700px] h-[700px]"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { Graph, treeToGraphData } from "@antv/g6";

const props = defineProps({
  isVisible: Boolean,
});

// 1. 使用响应式数据
const data = ref({
  id: "Modeling Methods",
  children: [
    {
      id: "Classification",
      children: [
        { id: "Logistic regression" },
        { id: "Linear discriminant analysis" },
        { id: "Rules" },
        { id: "Decision trees" },
        { id: "Naive Bayes" },
        { id: "K nearest neighbor" },
        { id: "Probabilistic neural network" },
        { id: "Support vector machine" },
      ],
    },
    {
      id: "Consensus",
      children: [
        {
          id: "Models diversity",
          children: [
            { id: "Different initializations" },
            { id: "Different parameter choices" },
            { id: "Different architectures" },
            { id: "Different modeling methods" },
            { id: "Different training sets" },
            { id: "Different feature sets" },
          ],
        },
        {
          id: "Methods",
          children: [
            { id: "Classifier selection" },
            { id: "Classifier fusion" },
          ],
        },
        {
          id: "Common",
          children: [{ id: "Bagging" }, { id: "Boosting" }, { id: "AdaBoost" }],
        },
      ],
    },
    {
      id: "Regression",
      children: [
        { id: "Multiple linear regression" },
        { id: "Partial least squares" },
        { id: "Multi-layer feedforward neural network" },
        { id: "General regression neural network" },
        { id: "Support vector regression" },
      ],
    },
  ],
});

// 2. 声明 graph 实例引用
const container = ref(null);
let graph = null;

// 3. 初始化图表的函数
const initGraph = () => {
  if (!container.value) return;

  // 销毁旧实例（如果存在）
  if (graph) graph.destroy();

  graph = new Graph({
    container: container.value,
    width: container.value.clientWidth,
    height: container.value.clientHeight,
    background: "#fff",
    autoFit: "view",
    data: treeToGraphData(data.value), // 使用 .value 访问响应式数据
    node: {
      style: {
        labelText: (d) => d.id,
        labelPlacement: "right",
        labelBackground: true,
        ports: [{ placement: "right" }, { placement: "left" }],
      },
    },
    layout: {
      type: "mindmap",
      direction: "LR",
      getHeight: () => 32,
      getWidth: () => 32,
      getVGap: () => 4,
      getHGap: () => 100,
    },

    behaviors: ["drag-canvas", "zoom-canvas", "drag-element"],
    plugins: [
      {
        type: "toolbar",
        position: "bottom-right",
        onClick: async (item) => {
          const currentZoom = graph.getZoom(); // 获取当前缩放级别
          switch (item) {
            case "zoom-in":
              graph.zoomTo(currentZoom * 1.2);
              break;
            case "zoom-out":
              graph.zoomTo(currentZoom * 0.8);
              break;
            case "auto-fit":
              graph.fitView({ padding: 20 });
              break;
            case "export": // 将export改为copy-image
              await copyImageToClipboard();
              break;
          }
        },
        getItems: () => {
          return [
            { id: "zoom-in", value: "zoom-in", tooltip: "放大" },
            { id: "zoom-out", value: "zoom-out", tooltip: "缩小" },
            { id: "auto-fit", value: "auto-fit", tooltip: "适应视图" },
            { id: "export", value: "export", tooltip: "复制图片" },
          ];
        },
      },

      {
        type: "fullscreen",
        key: "fullscreen",
      },
      function () {
        const graph = this;
        return {
          type: "toolbar",
          key: "toolbar",
          position: "top-left",
          onClick: (item) => {
            const fullscreenPlugin = graph.getPluginInstance("fullscreen");
            if (item === "request-fullscreen") {
              fullscreenPlugin.request();
            }
            if (item === "exit-fullscreen") {
              fullscreenPlugin.exit();
            }
          },
          getItems: () => {
            return [
              { id: "request-fullscreen", value: "request-fullscreen" },
              { id: "exit-fullscreen", value: "exit-fullscreen" },
            ];
          },
        };
      },
    ],
  });

  graph.render();

  setTimeout(() => {
    graph.fitView();
    container.value.style.background = ""; // 移除调试背景
  }, 100);
};
//剪切图片----------------------
const copyImageToClipboard = async () => {
  try {
    // 1. 获取图表Canvas
    const canvas = graph.getCanvas().getContextService().getDomElement();

    // 2. 转换为Blob
    const blob = await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });

    // 3. 复制到剪贴板
    await navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);

    alert("图片已复制到剪贴板！");
  } catch (error) {
    console.error("复制失败:", error);
    alert("复制失败，请手动截图或尝试其他浏览器");

    // 降级方案：显示图片让用户手动复制
    showImageFallback(canvas);
  }
};

// 4. 组件挂载时初始化
// onMounted(() => {
//   nextTick(() => {
//     initGraph();
//   });

//   window.addEventListener("resize", initGraph);
// });

// 5. 组件卸载时清理
onUnmounted(() => {
  if (graph) graph.destroy();
  window.removeEventListener("resize", initGraph);
});

// 6. 监听数据变化（如果需要动态更新数据）
watch(data, () => {
  if (graph) {
    graph.changeData(treeToGraphData(data.value));
  }
});
watch(
  () => props.isVisible,
  async (visible) => {
    if (visible) {
      await nextTick(); // 等 DOM 真正显示
      initGraph(); // 重新初始化图表
    }
  }
);
</script>

<style scoped>
/* 工具栏基础样式 */
.g6-component-toolbar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px;
  z-index: 100;
}

/* 按钮悬停效果 */
.g6-component-toolbar button:hover {
  background: #f0f0f0;
}
</style>
