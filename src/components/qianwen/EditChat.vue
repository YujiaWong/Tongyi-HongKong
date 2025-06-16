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
        class="w-[150px] flex justify-start items-center gap-2 p-2 px-2 pr-4 hover:bg-red-200 text-red-500 border-t border-t-gray-200 rounded-b-sm"
      >
        <DeleteOutlined />
        <span>删除此对话</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  EditOutlined,
  UnorderedListOutlined,
  PushpinOutlined,
  SendOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import ManageChatInEditPanel from "./ManageChatInEditPanel.vue";
</script>
