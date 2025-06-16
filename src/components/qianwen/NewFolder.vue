<template>
  <div id="NewFolder">
    <a-button type="primary" @click="showModal">弹窗绑定左侧+</a-button>
    <a-modal
    class="custom-modal"
      v-model:visible="visible"
      title=""
      :closable="false"
      @ok="handleOk"
      okText="确定"
      cancelText="取消"
      :okButtonProps="{ style:{backgroundColor: '#c6c4ff', borderColor: '#c6c4ff', borderRadius:'20px'} }"
      :cancelButtonProps="{style:{backgroundColor: 'white', borderColor: 'rgb(0,0,0,0.1)', borderRadius:'20px'}}"
    > 
      <div class="flex justify-between items-center pb-4">
        <span class="text-sm font-bold">新建文件夹</span>
        <button @click="handleOk"><CloseOutlined class="!text-md !text-gray-400 "/></button>
      </div>
      
      <a-input v-model:value="value" placeholder="输入文件夹名称，最多支持250个字符" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CloseOutlined } from '@ant-design/icons-vue';
const visible = ref(false);
const value = ref('');

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
</script>

<style>
.ant-modal-content {
  @apply rounded-xl;
}
</style>