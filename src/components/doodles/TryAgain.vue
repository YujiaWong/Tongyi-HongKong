<template>
  <div id="TryAgain" class="relative">
    <div class="flex gap-2">
      <div>
        <input v-show="toggle" type="checkbox" />
      </div>
      <div
        class="w-full flex flex-col justify-between items-center gap-4 text-gray-300 pb-6"
      >
        <div class="flex w-full">
          <span class="text-xs mr-6">2025-06-04 14:32:22 </span>
          <div class="flex-1 border-t border-t-gray-400 mt-2"></div>
        </div>
        <div class="w-full flex justify-between items-center">
          <div class="flex justify-start items-center gap-2 relative">
            <div class="picBtn flex gap-2 bg-[#878AAB33] p-1 rounded-sm">
              <div class="w-5 h-5 bg-black"></div>
              <span>涂鸦</span>
            </div>
            <div
              class="bigPic w-[220px] h-[220px] bg-[#141822] rounded-xl absolute top-9 left-0 z-10"
            ></div>
            <span>x</span>
            <div class="flex gap-2 bg-[#878AAB33] p-1 rounded-sm">
              <span>扁平插画</span>
            </div>
            <span>x</span>
            <a-popover color="#2D3240">
              <template #content>
                <button
                  class="text-gray-300 flex justify-center items-center gap-2 hover:text-white"
                >
                  <CopyOutlined /><span>复制文本</span>
                </button>
              </template>
              <a-button
                type="link"
                class="!text-gray-300 hover:!text-white !p-0"
                >小猫</a-button
              >
            </a-popover>
          </div>
          <div class="flex justify-center items-center gap-8">
            <button class="flex items-center gap-2">
              <EnterOutlined />复用创意
            </button>
            <button class="flex items-center gap-2">
              <RedoOutlined />再次生成
            </button>
            <button class="pb-[5px]"><DeleteOutlined /></button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[99%] rounded-md border border-red-400 bg-red-300/10 flex justify-start items-center ml-2 mt-[-10px] mb-6"
    >
      <span class="text-red-400 py-2 px-4">
        抱歉，由于当前过于火爆，请点击再次生成试一试
      </span>
    </div>
  </div>
</template>

<script setup>
import {
  DeleteOutlined,
  EnterOutlined,
  RedoOutlined,
  CopyOutlined,
} from "@ant-design/icons-vue";
</script>
<style scoped>
.drawingBtns {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.drawingHolder:hover .drawingArea {
  border: 3px solid rgb(72, 72, 237);
  border-radius: 10px;
}
.drawingHolder:hover .drawingImg {
  filter: brightness(55%);
}
.drawingHolder:hover .drawingBtns {
  opacity: 100;
}
.bigPic {
  display: none;
}
.picBtn:hover + .bigPic {
  display: block;
}
</style>
