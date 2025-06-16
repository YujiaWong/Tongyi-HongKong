<template>
  <div id="CreationModel">
    <div
      class="holder flex flex-col w-[350px] h-[800px] shadow-lg shadow-gray-300 rounded-3xl p-6 pl-[50px] gap-2 bg-[#fafafc]"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="font-600 text-[16px]">创作模型</span>
        <button class="text-xl">×</button>
      </div>
      <div
        class="w-[100%] h-[100px] bg-white rounded-2xl shadow-sm flex flex-col justify-center items-start p-4 gap-2"
      >
        <div class="flex flex-row justify-between items-center w-[100%]">
          <div class="flex justify-between items-center gap-2">
            <span class="text-[16px]">万象2.1 专业</span>
            <button
              class="text-[#e35b02] text-xs p-1 font-serif rounded-xl bg-orange-100"
            >
              New <span class="font-sans">全新升级</span>
            </button>
          </div>
          <a-radio v-model:checked="checked"></a-radio>
        </div>
        <span class="text-xs text-gray-400"
          >专业的画面质感，复杂的内容结构，卓越的效果表现力</span
        >
      </div>
      <div
        class="w-[100%] h-[100px] bg-white rounded-2xl shadow-sm flex flex-col justify-center items-start p-4 gap-2"
      >
        <div class="flex flex-row justify-between items-center w-[100%]">
          <div class="flex justify-between items-center gap-2">
            <span class="text-[16px]">万象2.1 极速</span>
            <button
              class="text-[#e35b02] text-xs p-1 font-serif rounded-xl bg-orange-100"
            >
              New <span class="font-sans">全新升级</span>
            </button>
          </div>
          <a-radio v-model:checked="checked"></a-radio>
        </div>
        <span class="text-xs text-gray-400"
          >丰富的风格表现，更好的话语理解，更快的生成速度</span
        >
      </div>
      <div
        class="w-[100%] h-[100px] bg-white rounded-2xl shadow-sm flex flex-col justify-center items-start p-4 gap-2"
      >
        <div class="flex flex-row justify-between items-center w-[100%]">
          <div class="flex justify-between items-center gap-2">
            <span class="text-[16px]">万象2.0 极速</span>
          </div>
          <a-radio v-model:checked="checked"></a-radio>
        </div>
        <span class="text-xs text-gray-400"
          >增强人像与风格美感，更快的生成速度</span
        >
      </div>
      <div
        class="w-[100%] h-[100px] bg-white rounded-2xl shadow-sm flex flex-col justify-center items-start p-4 gap-2"
      >
        <div class="flex flex-row justify-between items-center w-[100%]">
          <div class="flex justify-between items-center gap-2">
            <span class="text-[16px]">万象1.0 通用</span>
          </div>
          <a-radio v-model:checked="checked"></a-radio>
        </div>
        <span class="text-xs text-gray-400"
          >丰富的图像风格支持，稳定的生成品质</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloseOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
</script>
