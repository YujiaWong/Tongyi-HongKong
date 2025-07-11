<template>
  <div id="TextToPicPanel" class="h-full">
    <div
      class="holder flex flex-col w-[300px] h-full shadow-[0_0_10px_6px_rgb(72,72,237,0.05)] rounded-3xl p-6 gap-3 bg-white"
    >
      <div id="header" class="h-[50px]">
        <div class="text-[16px] pl-2">文字作画</div>
        <hr />
      </div>
      <div id="content" class="flex-1 flex flex-col overflow-hidden gap-3">
        <div class="flex justify-between items-center gap-3">
          <button
            class="p-2 py-1 border border-gray-300 rounded-3xl flex items-center gap-1"
          >
            <span>万象2.1专业</span><RightOutlined class="!text-xs" />
          </button>
          <button
            class="text-[#878aab] text-xs flex justify-center items-center gap-1"
          >
            <ReadOutlined /><span>使用指南</span>
          </button>
        </div>
        <div class="bg-[#f8f9ff] w-[250px] h-[160px] rounded-2xl pb-1">
          <textarea
            v-model="textContent"
            class="textPlace !border-none !bg-transparent w-[240px] !h-[120px] focus:!outline-none p-3 resize-none"
          />
          <div class="flex pl-2 gap-2 justify-start items-center">
            <button
              class="h-7 flex justify-start items-center gap-1 px-3 bg-gray-200 rounded-2xl text-xs"
            >
              <AlertOutlined />
              <span>智能扩写</span>
            </button>
            <button
              class="h-7 flex justify-start items-center gap-1 px-3 bg-white rounded-2xl text-xs hover:bg-purple-100"
            >
              <ReadOutlined />
              <span>咒语书</span>
            </button>
            <div class="flex justify-center items-center gap-1 w-[50px]">
              <span class="text-xs pl-2">{{ textContent.length }}/800</span>
              <button class="text-gray-400 pb-1">
                <CloseCircleOutlined />
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between items-center gap-1 text-xs text-[#878aab]"
        >
          <div class="flex gap-1 pl-1">
            <button>野餐</button>
            <button>水果</button>
            <button>面包</button>
            <button>蛋糕</button>
            <button>秋游</button>
          </div>
          <button><RedoOutlined /></button>
        </div>
        <div class="flex flex-col justify-center items-start gap-2">
          <span class="font-600">创意模板</span>
          <button
            class="flex flex-row items-center justify-between rounded-lg bg-[#f8f9ff] w-[100%] h-[60px] p-1 text-gray-400"
          >
            <div class="h-[100%] w-[52px] bg-gray-200 rounded-md">
              <PlusOutlined
                class="text-lg text-center text-gray-300 pt-[18px]"
              />
            </div>
            <span class="mr-[70px]">选择创意模板</span>
            <RightOutlined />
          </button>
        </div>
        <div class="flex flex-col justify-center items-start gap-2">
          <span class="font-600">参考图</span>
          <button
            class="flex flex-row items-center justify-center rounded-lg bg-[#f8f9ff] w-[100%] h-[60px] p-1 text-gray-400"
          >
            <span>功能即将上线，敬请期待</span>
          </button>
        </div>
        <div class="flex flex-col gap-2 justify-start items-start">
          <span>比例</span>
          <div class="flex gap-1 justify-center items-start">
            <button
              class="p-2 w-[80px] bg-gray-100 focus:bg-[#EEEDFF] flex justify-center items-center gap-2 rounded-3xl text-gray-500 focus:text-[rgb(72,72,237)]"
            >
              <BorderOutlined /><span>1:1</span>
            </button>
            <button
              class="p-2 w-[80px] bg-gray-100 focus:bg-[#EEEDFF] flex justify-center items-center gap-2 rounded-3xl text-gray-500 focus:text-[rgb(72,72,237)]"
            >
              <BorderOutlined /><span>16:9</span>
            </button>
            <button
              class="p-2 w-[80px] bg-gray-100 focus:bg-[#EEEDFF] flex justify-center items-center gap-2 rounded-3xl text-gray-500 focus:text-[rgb(72,72,237)]"
            >
              <BorderOutlined /><span>9:16</span>
            </button>
          </div>
          <div class="flex gap-1 justify-center items-start">
            <button
              class="p-2 w-[80px] bg-gray-100 focus:bg-[#EEEDFF] flex justify-center items-center gap-2 rounded-3xl text-gray-500 focus:text-[rgb(72,72,237)]"
            >
              <BorderOutlined /><span>4:3</span>
            </button>
            <button
              class="p-2 w-[80px] bg-gray-100 focus:bg-[#EEEDFF] flex justify-center items-center gap-2 rounded-3xl text-gray-500 focus:text-[rgb(72,72,237)]"
            >
              <BorderOutlined /><span>3:4</span>
            </button>
          </div>
        </div>
        <hr />
        <div class="flex justify-between items-center">
          <div class="flex flex-row justify-start items-center gap-2 relative">
            <span>灵感模式</span>
            <ExclamationCircleFilled
              class="exlcamation text-xs !text-gray-300"
            />
            <div
              class="popUpInfo p-2 h-[100px] w-[200px] shadow-md rounded-2xl bg-white absolute bottom-5 left-[50px]"
            >
              <span class="pl-2">灵感模式 </span>
              <p class="text-sm pl-2">
                增加创意灵感，提升画面丰富度与表现力，可能会与输入提示词有差异
              </p>
            </div>
          </div>

          <div class="pl-2">
            <a-switch v-model:checked="checked" size="small" />
          </div>
        </div>
      </div>
      <div class="h-[70px]">
        <button
          class="mt-5 p-3 w-[100%] rounded-[50px] text-white text-lg bg-[rgb(92,92,242)]"
        >
          生成画作
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ReadOutlined,
  AlertOutlined,
  RedoOutlined,
  PlusOutlined,
  RightOutlined,
  CloseCircleOutlined,
  BorderOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const textContent = ref("");
const checked = ref<boolean>(false);
</script>

<style scoped>
.textPlace:focus .holder {
  border-color: rgb(72, 72, 237);
}
.popUpInfo {
  display: none;
}
.exlcamation:hover + .popUpInfo {
  display: block;
}
</style>
