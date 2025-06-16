<template>
  <div id="DeleteConfirm">
    <div class="w-[400px] p-6 shadow-lg rounded-[20px]">
      <div class="flex justify-start items-start text-[16px] gap-2">
        <ExclamationCircleFilled
          :style="{ color: 'orange', paddingTop: '5px' }"
        />
        <p>该操作不可恢复，仍继续操作？</p>
      </div>
      <div class="flex justify-between items-center gap-5">
        <a-radio v-model:checked="checked">不再提示</a-radio>
        <button class="w-[100px] p-2 rounded-3xl border border-gray-200">
          取消
        </button>
        <button
          class="w-[100px] p-2 bg-[rgb(72,72,237)] text-white rounded-3xl \"
        >
          确定删除
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExclamationCircleFilled } from "@ant-design/icons-vue";
import { ref } from "vue";
const checked = ref(false);
</script>
