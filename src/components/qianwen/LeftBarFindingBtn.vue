<template>
  <div id="LeftBarFindingBtn " class="w-[60px] h-[80px]">
    <div class="flex flex-col items-center">
      <router-link to="discover">
        <button class="chatBtn w-[50px] h-[50px] rounded-full">
          <AppstoreOutlined class="text-3xl !text-white" />
        </button>
      </router-link>
      <span class="text-white-xs">发现</span>
    </div>
  </div>
</template>

<script setup>
import { AppstoreOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.chatBtn:focus {
  background-color: rgb(255, 255, 255, 0.1);
}
</style>
