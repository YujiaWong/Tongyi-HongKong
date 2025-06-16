<template>
  <div
    id="AIChatBox"
    class="relative mr-[50px]"
    @mouseenter="handleShowPencil"
    @mouseleave="handleUnshowPencil"
  >
    <div class="w-full flex flex-col rounded-xl p-4 py-3 bg-[#E0DFFF]">
      <span class="text-[16px]">1请问步的信息，请告诉我！</span>
    </div>
    <button ref="pencil" class="pencil">
      <EditOutlined
        class="text-lg !text-gray-500 absolute top-4 left-full pl-2 z-40"
      />
    </button>
  </div>
</template>

<script setup>
import { EditOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const pencil = ref(null);
const timer = ref(null);
function handleShowPencil() {
  pencil.value.style.opacity = 100;
  clearTimeout(timer);
}
function handleUnshowPencil() {
  timer = setTimeout(() => {
    pencil.value.style.opacity = 0;
  }, 500);
}
</script>
<style scoped>
.pencil {
  opacity: 0;
}
</style>
