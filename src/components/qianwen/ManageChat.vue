<template>
  <div id="ManageChat">
    <a-button type="link" @click="showModal" class="manage-btn">
      <OrderedListOutlined />
      <span>管理对话记录</span>
    </a-button>
    <a-modal
      v-model:visible="visible"
      :footer="null"
      :closable="false"
      width="900px"
      wrapClassName="custom-modal"
    >
      <div class="modal-content">
        <!-- 头部 -->
        <div class="modal-header">
          <h3>管理对话记录</h3>
          <div class="header-actions">
            <MyRecordSearch class="search-input" />
            <button @click="handleOk"><CloseOutlined /></button>
          </div>
        </div>

        <!-- 表格标题 -->
        <div class="table-header">
          <span class="col-name">对话名称</span>
          <span class="col-time">最近一次对话时间</span>
          <span class="col-actions">操作</span>
        </div>

        <!-- 对话列表 -->
        <ul class="dialog-list">
          <li v-for="(item, index) in dialogs" :key="index" class="dialog-item">
            <div class="item-main">
              <a-checkbox v-model:checked="item.checked" />
              <span class="name">{{ item.name }}</span>
            </div>
            <span class="time">{{ item.time }}</span>
            <button class="action-btn">
              <RestTwoTone twoToneColor="#000000" />
            </button>
          </li>
        </ul>

        <!-- 自定义底部 -->
        <div class="custom-footer">
          <a-button class="cancel-btn" @click="handleOk"> 取消 </a-button>
          <a-button
            class="delete-btn"
            @click="handleDelete"
            :disabled="!hasSelected"
          >
            删除所选
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  OrderedListOutlined,
  CloseOutlined,
  RestTwoTone,
} from "@ant-design/icons-vue";
import MyRecordSearch from "./MyRecordSearch.vue";

const visible = ref(false);
const dialogs = ref([
  { name: "测试样板1...", time: "2025-05-23 10:20", checked: false },
  { name: "测试样板2...", time: "2025-05-21 17:11", checked: false },
  { name: "测试样板3...", time: "2025-05-20 12:28", checked: false },
]);

const hasSelected = computed(() => {
  return dialogs.value.some((item) => item.checked);
});

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  visible.value = false;
};

const handleDelete = () => {
  // 删除逻辑
  dialogs.value = dialogs.value.filter((item) => !item.checked);
};
</script>

<style scoped>
/* 按钮样式 */
.manage-btn {
  @apply w-[200px] text-black flex flex-row justify-start items-center gap-2 p-5 px-3 border-none shadow-none rounded-xl bg-white hover:bg-[#f3f2ff];
}

/* 模态框内容 */
.modal-content {
  @apply flex flex-col;
}

.modal-header {
  @apply flex justify-between items-center mb-5;
}

.modal-header h3 {
  @apply text-lg font-medium;
}

.header-actions {
  @apply flex gap-4 items-center;
}

.search-input {
  @apply w-[300px];
}

/* 表格样式 */
.table-header {
  @apply flex justify-between items-center gap-2 bg-gray-100 text-gray-400 p-2 text-xs rounded-t-lg;
}

.col-name {
  @apply flex-1 px-4;
}

.col-time {
  @apply w-[200px] text-center;
}

.col-actions {
  @apply w-[80px] text-center;
}

/* 对话列表 */
.dialog-list {
  @apply border border-t-0 border-gray-200 rounded-b-lg;
}

.dialog-item {
  @apply flex justify-between items-center gap-2 p-4 text-sm border-b border-gray-200 last:border-b-0;
}

.item-main {
  @apply flex items-center gap-4 flex-1;
}

.time {
  @apply w-[200px] text-center text-gray-600;
}

.action-btn {
  @apply w-[80px] flex justify-center text-gray-500 hover:text-black;
}

/* 自定义底部 */
.custom-footer {
  @apply flex justify-end gap-3 mt-6;
}

.cancel-btn {
  @apply rounded-2xl border border-gray-300 bg-white hover:bg-gray-50;
}

.delete-btn {
  @apply rounded-2xl bg-[#ffadad] border-[#ffadad] text-white hover:bg-[#ff9a9a] hover:border-[#ff9a9a];
}

.delete-btn[disabled] {
  @apply bg-gray-200 border-gray-200 text-gray-400 cursor-not-allowed;
}
</style>

<style>
/* 全局覆盖模态框圆角 */
.custom-modal .ant-modal-content {
  border-radius: 16px;
  overflow: hidden;
}

.custom-modal .ant-modal-body {
  padding: 24px;
}
</style>
