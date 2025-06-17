<template>
  <div id="Intro">
    <div class="copyHolder flex flex-col p-4 gap-2">
      <div class="flex justify-between items-center">
        <span>章节速览</span>
        <button class="copyBtn flex items-center"><CopyOutlined /></button>
      </div>
      <div class="flex items-center gap-2">
        <p class="flex items-center gap-1">
          00:00 <span class="w-[8px] h-[8px] rounded-full bg-gray-600"></span>
        </p>
        <div
          class="flex-1 bg-purple-50 p-4 text-gray-600 rounded-md hover:border hover:border-purple-200"
        >
          <p>六月份项目退出与待解决问题讨论</p>
          <span>
            对话围绕在六月份需要完成的项目退出流程，以及已经完成的两大任务。此外，还提到了一个关于logo的问题需要解决，以及对住宿环境和测试环境状态的讨论。</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CopyOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.copyBtn {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.copyHolder:hover .copyBtn {
  opacity: 100;
}
</style>
