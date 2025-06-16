<template>
  <div id="LeftBarChatBtn " class="w-[60px] h-[80px]">
    <div class="flex flex-col items-center">
      <router-link to="qianwen1">
        <button class="chatBtn w-[50px] h-[50px] rounded-full">
          <CommentOutlined class="text-3xl !text-white" />
        </button>
      </router-link>
      <span class="text-white text-xs">对话</span>
    </div>
  </div>
</template>

<script setup>
import { CommentOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.chatBtn:focus {
  background-color: rgb(255, 255, 255, 0.1);
}
</style>
