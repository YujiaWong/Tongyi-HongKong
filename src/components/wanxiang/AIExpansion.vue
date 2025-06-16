<template>
  <div id="AIExpansion">
    <div
      class="holder flex flex-col w-[350px] h-[800px] shadow-lg shadow-gray-300 rounded-3xl p-6 pl-[50px] gap-2 bg-[#fafafc]"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="font-600 text-[16px]">灵感扩写</span>
        <button class="text-xl">×</button>
      </div>

      <div class="bg-[#ffffff] w-[100%] h-[160px] rounded-2xl">
        <textarea
          v-model="textContent"
          class="textPlace !border-none !bg-transparent !w-[260px] !h-[120px] focus:!outline-none p-3 resize-none"
        />

        <div class="flex justify-end items-center gap-1 p-2">
          <span class="text-xs pl-2">{{ textContent.length }}/800</span>
          <button class="text-gray-400 pb-1">
            <CloseCircleOutlined />
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <button
          class="mt-5 p-3 py-2 w-[60%] rounded-[50px] text-white text-md bg-[rgb(92,92,242)]"
        >
          使用扩写结果
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const textContent = ref("");
</script>
