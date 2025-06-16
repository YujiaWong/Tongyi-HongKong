<template>
  <div id="MagicBook" class="magic-book">
    <div class="book-container">
      <div class="header">
        <span class="title">咒语书</span>
        <button class="close-btn text-xl" @click="$emit('close')">×</button>
      </div>
      <div class="tab-viewer">
        <button
          class="nav-btn prev-btn"
          @click="scrollTabs(-1)"
          :disabled="scrollPosition === 0"
        >
          &lt;
        </button>

        <div class="tabs-container" ref="tabsContainer">
          <div
            class="tabs-wrapper"
            ref="tabsWrapper"
            :style="{ transform: `translateX(-${scrollPosition}px)` }"
          >
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              class="tab-item font-bold text-gray-400 text-[16px]"
              :class="{ active: activeTab === index }"
              @click="selectTab(index)"
            >
              {{ tab }}
            </div>
          </div>
        </div>

        <button
          class="nav-btn next-btn"
          @click="scrollTabs(1)"
          :disabled="isScrollEnd"
        >
          &gt;
        </button>
      </div>
      <div class="flex flex-wrap gap-4">
        <div v-for="(item, index) in content[activeTab]" :key="index">
          <button
            class="w-[90px] h-[40px] rounded-3xl bt-2 text-md bg-white hover:bg-purple-100"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <!-- <div class="tab-content">{{ content[activeTab] }} 的内容区域</div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const tabs = [
  "风格",
  "光线",
  "材质",
  "渲染",
  "色彩",
  "构图",
  "视角",
  "常用咒语",
];

const content = [
  // 风格（扩展了艺术风格和设计风格）
  [
    "印象派",
    "像素画",
    "波谱艺术",
    "赛伯朋克",
    "水墨画",
    "工笔画",
    "涂鸦",
    "极简主义",
    "超现实主义",
    "抽象表现主义",
    "复古风",
    "未来科技风",
    "卡通渲染",
    "手绘风格",
    "低多边形",
    "故障艺术",
    "蒸汽波",
    "浮世绘",
    "赛伯朋克",
    "水墨画",
    "工笔画",
    "涂鸦",
    "极简主义",
    "超现实主义",
    "抽象表现主义",
    "复古风",
    "未来科技风",
    "卡通渲染",
    "手绘风格",
    "低多边形",
    "手绘风格",
    "低多边形",
  ],

  // 光线（扩展了光照类型和效果）
  [
    "荧光",
    "测光",
    "镭射光",
    "聚光灯",
    "自然光",
    "柔光",
    "逆光",
    "侧光",
    "顶光",
    "点光源",
    "全局光照",
    "体积光",
    "霓虹光",
    "烛光",
    "月光",
    "阳光散射",
  ],

  // 材质（扩展了常见的材质类型）
  [
    "金属",
    "玻璃",
    "陶瓷",
    "木材",
    "石材",
    "布料",
    "皮革",
    "塑料",
    "水",
    "火焰",
    "毛绒",
    "大理石",
    "磨砂",
    "镜面",
    "半透明材质",
    "卡通材质",
  ],

  // 渲染（扩展了渲染技术和效果）
  [
    "实时渲染",
    "离线渲染",
    "光线追踪",
    "路径追踪",
    "卡通渲染",
    "写实渲染",
    "素描风格渲染",
    "水彩渲染",
    "粒子效果",
    "动态模糊",
    "景深效果",
    "HDR渲染",
  ],

  // 色彩（扩展了色彩方案和术语）
  [
    "莫兰迪色",
    "马卡龙色",
    "渐变色",
    "对比色",
    "互补色",
    "单色调",
    "三色组合",
    "冷暖对比",
    "高饱和度",
    "低饱和度",
    "荧光色",
    "金属色",
  ],

  // 构图（扩展了构图技巧和类型）
  [
    "三分法",
    "对称构图",
    "黄金分割",
    "引导线构图",
    "框架构图",
    "填充式构图",
    "留白",
    "对角线构图",
    "中心构图",
    "重复构图",
    "层次感构图",
  ],

  // 视角（扩展了摄影和绘画视角）
  [
    "俯视",
    "仰视",
    "平视",
    "鸟瞰视角",
    "鱼眼视角",
    "微距视角",
    "第一人称视角",
    "等距视角",
    "广角视角",
    "长焦压缩",
    "倾斜视角",
  ],

  // 常用咒语（扩展了AIGC常用提示词）
  [
    "高清8K",
    "超详细",
    "复杂细节",
    "虚幻引擎渲染",
    "OC渲染",
    "电影级光影",
    "工作室灯光",
    "绝美光影",
    "杰作级",
    "趋势艺术",
    "透明背景",
    "白色背景",
    "插画风格",
    "3D渲染",
    "逼真质感",
  ],
];
const activeTab = ref(0);
const scrollPosition = ref(0);
const tabsContainer = ref(null);
const tabsWrapper = ref(null);
const containerWidth = ref(0);
const wrapperWidth = ref(0);

const isScrollEnd = computed(() => {
  return scrollPosition.value >= wrapperWidth.value - containerWidth.value;
});

const selectTab = (index) => {
  activeTab.value = index;
  // 确保选中的标签可见
  ensureTabVisible(index);
};

const scrollTabs = (direction) => {
  const scrollAmount = containerWidth.value * 0.4; // 每次滚动容器宽度的80%
  let newPosition = scrollPosition.value + scrollAmount * direction;

  // 边界检查
  newPosition = Math.max(0, newPosition);
  newPosition = Math.min(
    wrapperWidth.value - containerWidth.value,
    newPosition
  );

  scrollPosition.value = newPosition;
};

const ensureTabVisible = (index) => {
  if (!tabsWrapper.value || !tabsContainer.value) return;

  const tabElements = tabsWrapper.value.children;
  if (index >= tabElements.length) return;

  const tab = tabElements[index];
  const tabLeft = tab.offsetLeft;
  const tabRight = tabLeft + tab.offsetWidth;
  const currentLeft = scrollPosition.value;
  const currentRight = currentLeft + containerWidth.value;

  if (tabLeft < currentLeft) {
    // 标签在可视区域左侧
    scrollPosition.value = tabLeft;
  } else if (tabRight > currentRight) {
    // 标签在可视区域右侧
    scrollPosition.value = tabRight - containerWidth.value;
  }
};

const updateDimensions = () => {
  if (tabsContainer.value && tabsWrapper.value) {
    containerWidth.value = tabsContainer.value.offsetWidth;
    wrapperWidth.value = tabsWrapper.value.scrollWidth;
  }
};

onMounted(() => {
  updateDimensions();
  window.addEventListener("resize", updateDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDimensions);
});
</script>

<style scoped>
.magic-book {
  font-family: Arial, sans-serif;
  --nav-btn-size: 32px;
  --tab-height: 40px;
}

.book-container {
  width: 350px;
  height: 800px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 24px;
  background: #fafafc;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.title {
  font-weight: 600;
  font-size: 16px;
}

.close-btn {
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
}

.tab-viewer {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.nav-btn {
  width: var(--nav-btn-size);
  height: var(--nav-btn-size);
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tabs-container {
  flex: 1;
  overflow: hidden;
  position: relative;
  height: var(--tab-height);
}

.tabs-wrapper {
  display: flex;
  position: absolute;
  transition: transform 0.3s ease;
  height: 100%;
}

.tab-item {
  padding: 0 8px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 2px solid transparent;
  flex-shrink: 0;
}

.tab-item.active {
  color: #000000;
}

.tab-content {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
}
</style>
