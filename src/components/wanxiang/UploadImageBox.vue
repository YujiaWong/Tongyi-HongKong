<template>
  <div class="clearfix relative">
    <a-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
      :max-count="1"
    >
      <div
        v-if="fileList.length < 1"
        class="w-[200px] h-[260px] text-gray-400 absolute top-0 pt-[100px]"
      >
        <plus-outlined class="text-xl !text-gray-400" />
        <div style="margin-top: 8px">
          点击或拖动上传图片，没有合适的图片，试试
          <button class="text-[rgb(72,72,237)]">官方示例</button>
        </div>
      </div>
    </a-upload>
    <a-modal
      :open="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");
const fileList = ref([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
</script>

<style scoped>
/* 上传卡片样式 */
:deep(.ant-upload.ant-upload-select-picture-card) {
  width: 265px;
  height: 260px;
  border-radius: 16px;
  border: none;
}

/* 图标和文字样式 */
:deep(.ant-upload-select-picture-card i) {
  font-size: 28px;
  color: #1890ff;
}

:deep(.ant-upload-select-picture-card .ant-upload-text) {
  color: #1890ff;
  font-size: 14px;
}

/* 已上传图片卡片样式 */
:deep(.ant-upload-list-picture-card-container) {
  width: 260px;
  height: 260px;
}

:deep(.ant-upload-list-picture-card .ant-upload-list-item) {
  border-radius: 16px;
  border: none;
}

/* 图片预览样式 */
:deep(.ant-upload-list-item-thumbnail img) {
  width: 260px;
  height: 260px;
  border-radius: 16px;
  object-fit: cover;
}
</style>
