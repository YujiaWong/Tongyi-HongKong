<template>
  <div id="VoiceToTextBar" class="w-full">
    <div class="flex justify-between items-center flex-[1] w-full">
      <span class="text-[16px]">语言转文字</span>
      <div class="flex justify-center items-center gap-2 text-gray-600">
        <!-- 搜索按钮 -->
        <button
          @mouseenter="toggleTooltip('search', true)"
          @mouseleave="toggleTooltip('search', false)"
          class="searchHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <SearchOutlined />
          <div
            v-show="activeTooltip === 'search'"
            class="searchHint z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-2 mt-1 rounded-md absolute top-full right-0 w-[60px]"
            @mouseenter="cancelHide('search')"
            @mouseleave="toggleTooltip('search', false)"
          >
            <span class="text-gray-600 font-semibold">搜索</span>
          </div>
        </button>

        <!-- 筛选按钮 -->
        <button
          @mouseenter="toggleTooltip('filter', true)"
          @mouseleave="toggleTooltip('filter', false)"
          class="filterHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <FilterOutlined />
          <div
            v-show="activeTooltip === 'filter'"
            class="filterBoard z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-4 mt-1 rounded-md absolute top-full right-0 w-[250px] text-gray-600 flex flex-col justify-start items-start gap-2"
            @mouseenter="cancelHide('filter')"
            @mouseleave="toggleTooltip('filter', false)"
          >
            <span class="font-semibold">筛选</span>
            <div class="flex w-full justify-start items-start gap-3 mb-2">
              <input type="checkbox" />
              <div
                class="w-full flex flex-col justify-start items-start gap- border-b border-b-gray-200 pb-2"
              >
                <span class="text-xs">只看标记内容</span>
                <div class="flex gap-2">
                  <button>
                    <PushpinOutlined
                      class="bg-blue-300 p-1 rounded-full !text-white text-[10px]"
                    />
                  </button>
                  <button>
                    <QuestionOutlined
                      class="bg-pink-300 p-1 rounded-full !text-white text-[10px]"
                    />
                  </button>
                  <button>
                    <CheckOutlined
                      class="bg-yellow-300 p-1 rounded-full !text-white text-[10px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-start items-start gap-3">
              <input type="checkbox" />
              <div
                class="flex flex-col justify-start items-start gap-1 text-xs"
              >
                <span class="text-xs">显示发言人</span>
                <div class="flex flex-col gap-1 justify-start items-start">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" /><span>全选</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <input type="checkbox" /><span>发言人1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        <!-- 翻译按钮 -->
        <button
          @mouseenter="toggleTooltip('translate', true)"
          @mouseleave="toggleTooltip('translate', false)"
          class="translationHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <TranslationOutlined />
          <div
            v-show="activeTooltip === 'translate'"
            class="translationPopup z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-4 mt-1 rounded-md absolute top-full right-0 w-[260px] flex flex-col justify-start items-start gap-2"
            @mouseenter="cancelHide('translate')"
            @mouseleave="toggleTooltip('translate', false)"
          >
            <span class="font-semibold text-gray-600">翻译</span>
            <div class="flex justify-start items-center gap-2">
              <span class="text-gray-600">选择语言 </span>
              <div class="relative">
                <button
                  @click="handleToggleLanguage"
                  class="w-[165px] h-[30px] flex justify-between items-center rounded-md border border-gray-200 p-2 px-3 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] shadow-[0_0_3px_2px_rgb(68,51,255,0.2)]"
                >
                  <span>源语言</span><DownOutlined class="text-gray-400" />
                </button>
                <div
                  v-show="toggleLanguage"
                  class="w-[150px] rounded-2xl bg-white absolute top-full left-0 p-2 mt-2 shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] z-20"
                >
                  <button
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    源语言
                  </button>
                  <button
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    英文
                  </button>
                  <button
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    日语
                  </button>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-gray-600">显示语言</span>
              <div class="flex items-center gap-2">
                <button
                  class="flex items-center h-[30px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
                >
                  <span>双语显示</span>
                </button>
                <button
                  class="flex items-center h-[30px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
                >
                  <span>纯译文显示</span>
                </button>
              </div>
            </div>
          </div>
        </button>

        <!-- 文档按钮 -->
        <button
          @mouseenter="toggleTooltip('file', true)"
          @mouseleave="toggleTooltip('file', false)"
          class="documentHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <FileWordOutlined />
          <div
            v-show="activeTooltip === 'file'"
            class="flex flex-col justify-start items-start gap-2 documentPopup z-30 bg-white shadow-[0_0_20px_-3px_rgb(0,0,0,0.1)] p-4 mt-1 rounded-md absolute top-full right-0 w-[250px]"
            @mouseenter="cancelHide('file')"
            @mouseleave="toggleTooltip('file', false)"
          >
            <span class="font-semibold text-gray-600">自定义专有词汇</span>
            <span class="text-gray-500 text-xs text-start"
              >添加人名，地名，专业术语以帮助相应词汇的识别准确率。</span
            >
            <div
              class="flex items-center pl-2 w-full h-[40px] border border-purple-300 shadow-[0_0_5px_3px_rgb(68,51,255,0.2)] rounded-md"
            >
              <input
                type="text"
                class="outline-none w-[85%]"
                placeholder="请输入10字内专有词汇"
              />
              <button
                class="w-[25px] h-[25px] rounded-sm text-white bg-[rgb(68,51,255,0.6)]"
              >
                +
              </button>
            </div>
          </div>
        </button>

        <!-- 交换按钮 -->
        <button
          @mouseenter="toggleTooltip('switch', true)"
          @mouseleave="toggleTooltip('switch', false)"
          class="swapHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <SwapOutlined />
          <div
            v-show="activeTooltip === 'switch'"
            class="flex flex-col justify-start items-start gap-2 swapPopup z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-4 mt-1 rounded-md absolute top-full right-0 w-[250px]"
            @mouseenter="cancelHide('switch')"
            @mouseleave="toggleTooltip('switch', false)"
          >
            <span class="font-semibold text-gray-600">智能替换</span>
            <span class="text-gray-500 text-xs text-start"
              >输入智能替换，人工智能将全程识别并替换文本（仅本次生效）。</span
            >
            <div
              class="flex items-center pl-2 w-full h-[40px] border border-purple-300 shadow-[0_0_2px_2px_rgb(68,51,255,0.1)] rounded-md"
            >
              <input
                type="text"
                class="outline-none w-[85%]"
                placeholder="输入A"
              />
            </div>
            <div
              class="flex items-center pl-2 w-full h-[40px] border border-purple-300 shadow-[0_0_2px_2px_rgb(68,51,255,0.1)] rounded-md"
            >
              <input
                type="text"
                class="outline-none w-[85%]"
                placeholder="替换为B"
              />
            </div>
            <button
              class="w-full py-2 rounded-lg text-white bg-[rgb(68,51,255,0.6)]"
            >
              文本转换
            </button>
          </div>
        </button>

        <!-- 团队按钮 -->
        <button
          @mouseenter="toggleTooltip('team', true)"
          @mouseleave="toggleTooltip('team', false)"
          class="teamHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 text-[#615ced] hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <TeamOutlined />
          <div
            v-show="activeTooltip === 'team'"
            class="flex flex-col justify-start items-start teamPopup gap-2 z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-3 mt-1 rounded-md absolute top-full right-0 w-[200px]"
            @mouseenter="cancelHide('team')"
            @mouseleave="toggleTooltip('team', false)"
          >
            <div class="w-full flex items-center justify-between">
              <span class="font-semibold text-gray-700">发言人区分已开启</span>
              <div
                class="text-[#615ced] bg-[#615ced33] px-2 rounded-2xl text-xs"
              >
                体验中
              </div>
            </div>

            <span class="text-gray-600 text-xs text-start"
              >通义支持自动区分发言人，识别结果不会覆盖你已经编辑的发言人信息。识别过程中不会存储任何声音特征信息。</span
            >
            <div class="w-full border border-gray-200"></div>
            <p class="text-gray-500 text-xs">
              已选择发言人数 <span class="text-[#615ced]">智能区分</span>
            </p>
          </div>
        </button>

        <!-- AI按钮 -->
        <button
          @mouseenter="toggleTooltip('ai', true)"
          @mouseleave="toggleTooltip('ai', false)"
          class="teamHolder w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 text-[#615ced] hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)] relative"
        >
          <EditOutlined />
          <div
            v-show="activeTooltip === 'ai'"
            class="flex flex-col justify-start items-start teamPopup gap-2 z-30 bg-white shadow-[0_0_15px_-3px_rgb(0,0,0,0.1)] p-3 mt-1 rounded-md absolute top-full right-0 w-[250px]"
            @mouseenter="cancelHide('ai')"
            @mouseleave="toggleTooltip('ai', false)"
          >
            <div class="w-full flex items-center justify-between">
              <span class="font-semibold text-gray-700">AI改写</span>
            </div>

            <span class="text-gray-600 text-xs text-start"
              >在保留原文要点内容基础上，将原文内容进行精简和改写。</span
            >
            <div
              class="w-full flex items-center justify-between text-gray-500 text-xs"
            >
              <span>显示内容</span>
              <input type="radio" name="contentShown" /><span>改写结果</span>
              <input type="radio" name="contentShown" /><span
                >原文和改写结果</span
              >
            </div>
            <button class="bg-[#615ced] rounded-2xl w-full p-[4px] text-white">
              立即体验
            </button>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  SearchOutlined,
  FilterOutlined,
  TranslationOutlined,
  FileWordOutlined,
  SwapOutlined,
  TeamOutlined,
  PushpinOutlined,
  QuestionOutlined,
  CheckOutlined,
  DownOutlined,
  SmileOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";

const activeTooltip = ref(null);
let hideTimers = {};

const toggleTooltip = (tool, show) => {
  if (hideTimers[tool]) clearTimeout(hideTimers[tool]);

  if (show) {
    activeTooltip.value = tool;
  } else {
    hideTimers[tool] = setTimeout(() => {
      if (activeTooltip.value === tool) {
        activeTooltip.value = null;
      }
    }, 500);
  }
};

const cancelHide = (tool) => {
  if (hideTimers[tool]) {
    clearTimeout(hideTimers[tool]);
  }
};

let toggleLanguage = ref(false);
function handleToggleLanguage() {
  toggleLanguage.value = !toggleLanguage.value;
}
</script>

<style scoped>
.searchHint {
  display: none;
}

.searchHolder:hover .searchHint {
  display: block;
}
</style>
