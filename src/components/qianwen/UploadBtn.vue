<template>
  <div
    @mouseenter="showUploadBoard"
    @mouseleave="unshowUploadBoard"
    id="UploadBtn"
    class="hoverWrapper relative"
  >
    <button
      class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200"
    >
      <FileTextOutlined class="!text-gray-600 pb-2" />
    </button>
    <div
      v-if="showBoard"
      class="content bg-white w-[350px] flex flex-col shadow-around shadow-lg shadow-gray-300 rounded-xl p-4 mt-2 absolute top-full right-10 z-10"
    >
      <span>上传记录</span>
      <hr />
      <div class="h-[400px] flex justify-center items-center">
        <span class="text-gray-500 font-bold text-center">暂无上传记录</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileTextOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
let showBoard = ref(false);
let timer = null;
function showUploadBoard() {
  showBoard.value = true;
  clearTimeout(timer);
}
function unshowUploadBoard() {
  timer = setTimeout(() => {
    showBoard.value = false;
  }, 500);
}
</script>

<style scoped>
.hoverWrapper:hover button {
  background-color: #bcb9f730;
}

.hoverWrapper:hover .content {
  display: block;
}
</style>
