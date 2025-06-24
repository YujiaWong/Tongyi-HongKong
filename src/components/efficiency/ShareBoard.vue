<template>
  <div id="ShareBoard" class="z-40">
    <div
      class="w-[300px] flex flex-col gap-2 justify-center items-start p-4 rounded-xl bg-white shadow-[0_0_10px_3px_rgb(0,0,0,0.1)]"
    >
      <span class="text-[16px] font-semibold">分享</span>
      <span class="text-xs text-gray-500"
        >分享未开启，请选择分享方式开启分享</span
      >
      <button
        class="w-full bg-[#615ced] p-2 rounded-2xl text-white flex justify-center items-center gap-2"
      >
        <LinkOutlined /><span>复制链接</span>
      </button>
      <button
        class="w-full border border-gray-200 p-2 rounded-2xl flex justify-center items-center gap-2"
      >
        <PictureOutlined /><span>图片分享</span>
      </button>
      <div class="w-full flex justify-between items-center">
        <div
          class="flex justify-start items-center gap-1 text-xs text-gray-500"
        >
          <input type="checkbox" />
          <span>允许创建副本</span>
          <ExclamationCircleOutlined />
        </div>
        <button
          class="border border-gray-200 p-2 rounded-2xl text-xs text-gray-500"
        >
          未开启分享
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ExclamationCircleOutlined,
  LinkOutlined,
  PictureOutlined,
} from "@ant-design/icons-vue";

import { ref } from "vue";
</script>
