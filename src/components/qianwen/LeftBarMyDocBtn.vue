<template>
  <div id="LeftBarMyDocBtn" class="w-[60px] h-[80px]">
    <div class="flex flex-col items-center">
      <button class="chatBtn w-[50px] h-[50px] rounded-full">
        <FolderOpenOutlined class="text-3xl !text-white" />
      </button>
      <span class="text-white text-xs">我创建的</span>
    </div>
  </div>
</template>

<script setup>
import { FolderOpenOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.chatBtn:focus {
  background-color: rgb(255, 255, 255, 0.1);
}
</style>
