<template>
  <div id="MyRecordBtn">
    <button type="button">
      <div class="w-[200px] flex flex-row justify-between items-center text-[#615ced] gap-2 bg-[#f3f2ff] p-2 px-3 rounded-xl">
        <div class="flex items-center gap-2">
          <FileTextOutlined />
          我的记录
        </div>
        <div class="twoIcons hidden">
          <button type="button">
            <PlusOutlined />
          </button>
          <button ref="dropdown" @click="toggleRotation">
            <DownOutlined :class="[isRotated ? 'rotate-180' : '', 'dropdownIcon']"/>
          </button>     
        </div>
      </div>
    </button>
    <br/>
    <button v-show="isRotated" class="w-[200px] text-[#615ced] flex justify-start items-center p-2 px-6 text-xs bg-[#f3f2ff] rounded-xl mt-2">
        默认文件夹
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FileTextOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons-vue';

const isRotated = ref(false);

const toggleRotation = () => {
  isRotated.value = !isRotated.value;
};
</script>

<style scoped>
#MyRecordBtn:hover .twoIcons{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 从0到180度 */
@keyframes rotate180 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

/* 应用动画到图标 */
.dropdownIcon {
  transition: transform 0.5s; 
}

.rotate-180 {
  animation: rotate180 0.2s linear forwards;
  transform: rotate180 0.2s linear forwards; /* 直接设置最终状态，避免重复动画 */
}
</style>