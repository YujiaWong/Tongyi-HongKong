<template>
  <div id="FunctionPanel" class="w-full h-full">
    <div class="w-[80%] ml-[10%] h-full py-10 relative">
      <div class="flex justify-start items-center gap-4 mb-4">
        <span class="w-[100px] text-lg text-gray-500">音频语言</span>
        <button
          class="w-[180px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
        >
          中文
        </button>
        <button
          class="w-[180px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
        >
          英文
        </button>
        <div class="relative">
          <button
            @click="handleToggleLanguage"
            class="w-[180px] flex justify-between items-center rounded-xl border border-gray-200 p-2 px-3 text-gray-500 hover:bg-[rgb(68,51,255,0.1)]"
          >
            <span>其他语言</span><DownOutlined class="text-gray-400" />
          </button>
          <div
            v-show="toggleLanguage"
            class="w-[180px] rounded-2xl bg-white absolute top-full left-0 p-2 mt-2 shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] z-20"
          >
            <button
              class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
            >
              不翻译
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
      <div class="flex justify-start items-center gap-4 mb-4">
        <span class="w-[100px] text-lg text-gray-500">翻译</span>
        <div class="relative">
          <button
            @click="handleToggleTranslate"
            class="w-[570px] flex justify-between items-center rounded-xl border border-gray-200 p-2 px-3 text-gray-500 hover:bg-[rgb(68,51,255,0.1)]"
          >
            <span>不翻译</span><DownOutlined class="text-gray-400" />
          </button>
          <div
            v-show="toggleTranslate"
            class="w-[570px] rounded-2xl bg-white absolute top-full left-0 p-2 mt-2 shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] z-10"
          >
            <button
              class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
            >
              不翻译
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
      <div class="flex justify-start items-center gap-4 mb-2">
        <span class="w-[100px] text-lg text-gray-500">区分发言人</span>
        <button
          class="w-[180px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
        >
          智能区分
        </button>
        <button
          class="w-[180px] rounded-xl border border-gray-200 p-2 text-gray-500 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] focus:bg-[rgb(68,51,255,0.1)]"
        >
          暂不区分
        </button>
      </div>
      <!-- --------------开麦克风提示----------------- -->
      <div
        v-if="hint"
        class="flex justify-center items-center gap-1 mb-2 absolute left-[240px]"
      >
        <ExclamationCircleFilled class="!text-[#615ced]" />
        <span class="text-center text-xs text-gray-500 pb-0">
          麦克风权限未开启，请开启后刷新重试
        </span>
        <button class="flex items-center" @click="closeHint">
          <CloseOutlined class="text-xs !text-gray-400" />
        </button>
      </div>

      <div class="w-full flex justify-center mt-8">
        <router-link to="live/recording">
          <button
            class="bg-[#615ced] rounded-3xl p-3 w-[200px] text-white text-lg hover:bg-[#7d79f0]"
          >
            开始录音
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  DownOutlined,
  CloseOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons-vue";
let toggleTranslate = ref(false);
let hint = ref(true);
function handleToggleTranslate() {
  toggleTranslate.value = !toggleTranslate.value;
}
let toggleLanguage = ref(false);

function handleToggleLanguage() {
  toggleLanguage.value = !toggleLanguage.value;
}

function closeHint() {
  hint.value = false;
}
</script>
