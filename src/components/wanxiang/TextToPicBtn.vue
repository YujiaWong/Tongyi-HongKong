<template>
  <div id="TextToPicBtn">
    <button
      class="flex flex-row justify-center items-center gap-3 p-3 px-4 rounded-3xl text-[#878aab] focus:text-[#615ced] focus:!bg-gray-200"
    >
      <PictureOutlined class="text-xl" />
      <span>文字作画</span>
    </button>
  </div>
</template>

<script setup>
import { PictureOutlined } from "@ant-design/icons-vue";
</script>
