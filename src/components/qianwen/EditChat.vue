<template>
  <div id="EditChat">
    <div
      class="rounded-lg bg-white z-50 shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] flex flex-col justify-start items-center p-1"
    >
      <button
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 rounded-sm text-black hover:bg-[rgb(68,51,255,0.1)] hover:text-[rgb(68,51,255)]"
      >
        <EditOutlined />
        <span>重命名</span>
      </button>
      <button
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 rounded-sm text-black hover:bg-[rgb(68,51,255,0.1)] hover:text-[rgb(68,51,255)]"
      >
        <PushpinOutlined />
        <span>置顶此对话</span>
      </button>
      <button
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 rounded-sm text-black hover:bg-[rgb(68,51,255,0.1)] hover:text-[rgb(68,51,255)]"
      >
        <SendOutlined />
        <span>分享此对话</span>
      </button>
      <!-- <button
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 rounded-sm text-black hover:bg-[rgb(68,51,255,0.1)] hover:text-[rgb(68,51,255)]"
      >
        <UnorderedListOutlined />
        <span>批量管理</span>
      </button> -->
      <ManageChatInEditPanel />
      <button
        @click="handleShowDeleteConfirm"
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 hover:bg-red-200 text-red-500 border-t border-t-gray-200 rounded-b-sm"
      >
        <DeleteOutlined />
        <span>删除此对话</span>
      </button>
    </div>
    <Teleport to="body">
      <div
        v-if="showDeleteConfirm"
        id="deleteConfirm"
        class="absolute top-0 left-0 w-screen h-screen z-40 bg-[rgb(0,0,0,0.5)] flex justify-center items-center"
      >
        <div
          class="w-[400px] bg-white rounded-2xl flex flex-col justify-start items-start gap-2 pt-4 p-6"
        >
          <div class="flex items-center justify-start gap-2">
            <ExclamationCircleOutlined class="!text-red-500" />
            <span class="font-semibold text-[16px]"
              >确认删除这 1 条对话记录吗？</span
            >
          </div>
          <span class="text-gray-500 ml-6"
            >删除后对话记录无法恢复和找回，请谨慎操作</span
          >
          <div class="w-full flex items-end justify-end gap-2">
            <button
              class="rounded-2xl border border-gray-300 p-1 w-[80px] hover:text-[#615ced] hover:bg-[#615ced33]"
              @click="handleUnshowDeleteConfirm"
            >
              取消
            </button>
            <button
              class="rounded-2xl p-1 w-[80px] bg-red-500 text-white hover:bg-red-600"
            >
              确认删除
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import {
  EditOutlined,
  ExclamationCircleOutlined,
  UnorderedListOutlined,
  PushpinOutlined,
  SendOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import ManageChatInEditPanel from "./ManageChatInEditPanel.vue";
import NewPromptAdding from "./NewPromptAdding.vue";
import { ref } from "vue";

let showDeleteConfirm = ref(false);
function handleShowDeleteConfirm() {
  showDeleteConfirm.value = true;
}
function handleUnshowDeleteConfirm() {
  showDeleteConfirm.value = false;
}
</script>
