<template>
  <div id="MyCollect">
    <button
      class="flex flex-row justify-center items-center gap-3 p-3 px-4 rounded-3xl text-[#878aab] focus:text-[#615ced] focus:!bg-gray-200"
    >
      <HeartOutlined class="text-xl" />
      <span>我的收藏</span>
    </button>
  </div>
</template>

<script setup>
import { HeartOutlined } from "@ant-design/icons-vue";
</script>
