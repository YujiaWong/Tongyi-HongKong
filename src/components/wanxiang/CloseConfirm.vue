<template>
  <div id="CloseConfirm">
    <div class="w-[400px] p-6 shadow-lg rounded-[20px]">
      <div class="flex justify-start items-start text-[16px] gap-2">
        <ExclamationCircleFilled
          :style="{ color: 'orange', paddingTop: '5px' }"
        />
        <p>退出后绘制区域和画面描述将不会保存，是否确认退出？</p>
      </div>
      <div class="flex justify-end gap-5">
        <button class="w-[100px] p-2 rounded-3xl border border-gray-200">
          取消
        </button>
        <button
          class="w-[100px] p-2 bg-[rgb(72,72,237)] text-white rounded-3xl \"
        >
          确定退出
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationCircleFilled } from "@ant-design/icons-vue";
</script>
