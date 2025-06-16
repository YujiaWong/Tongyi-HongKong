<template>
  <div
    @mouseenter="showUploadBoard"
    @mouseleave="unshowUploadBoard"
    id="StarBtn"
    class="hoverWrapper relative"
  >
    <button
      class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200"
    >
      <StarOutlined class="!text-gray-600 pb-2" />
    </button>
  </div>
</template>

<script setup>
import { StarOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.hoverWrapper:hover button {
  background-color: #bcb9f730;
}
</style>
