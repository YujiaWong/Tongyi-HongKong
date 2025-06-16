<template>
  <div id="Records">
    <div class="flex justify-between item-center my-4 mb-6">
      <span>最近记录</span>
      <button class="flex items-center gap-1 text-[#615ced]">
        <span>查看全部</span><RightOutlined />
      </button>
    </div>
    <div
      class="w-full h-full bg-white rounded-2xl border border-gray-300 overflow-hidden p-4 mb-[60px]"
    >
      <div
        id="thead"
        class="flex justify-between items-center text-gray-500 text-sm p-2 mb-2"
      >
        <span class="flex-[6]">文件</span>
        <span class="flex-[3]">详情</span>
        <span class="flex-[2]">类型</span>
        <span class="flex-[2]">时长</span>
        <span class="flex-[2]">创建时间</span>
        <span class="flex-[1]">操作</span>
      </div>
      <div v-for="(item, index) in data" :key="index">
        <div
          class="flex justify-between items-center text-gray-400 text-sm p-2 py-5 border-t border-t-gray-200 relative hover:bg-[rgb(68,51,255,0.05)]"
        >
          <span class="flex-[6]">{{ item.file }}</span>
          <span class="flex-[3]">{{ item.details }}</span>
          <span class="flex-[2]">{{ item.type }}</span>
          <span class="flex-[2]">{{ item.duration }}</span>
          <span class="flex-[2]">{{ item.generatingTime }}</span>
          <span class="optionHolder flex-[1]">
            <button class="optionBtn flex items-center justify-center pl-2">
              <EllipsisOutlined />
            </button>

            <div
              class="optionPanel hidden absolute shadow-lg bg-white right-2 z-10 p-2 text-gray-600 rounded-lg border border-gray-100"
              :class="
                index === data.length - 1 || index === data.length - 2
                  ? 'bottom-9'
                  : 'top-9'
              "
            >
              <button
                class="flex justify-center items-center gap-3 rounded-sm hover:bg-[rgb(68,51,255,0.1)] p-2"
              >
                <DownloadOutlined /><span>导出</span>
              </button>
              <button
                class="flex justify-center items-center gap-3 rounded-sm hover:bg-[rgb(68,51,255,0.1)] p-2"
              >
                <RightSquareOutlined /><span>移动</span>
              </button>
              <button
                class="flex justify-center items-center gap-3 rounded-sm hover:bg-[rgb(68,51,255,0.1)] p-2"
              >
                <DeleteOutlined /><span>删除</span>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  EllipsisOutlined,
  DownloadOutlined,
  DeleteOutlined,
  RightSquareOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const data = [
  {
    key: "0",
    file: "2025-06-13 14:05 记录",
    details: "内容为空",
    type: "实时记录",
    duration: "00:04",
    generatingTime: "06/13 14:05",
  },
  {
    key: "1",
    file: "2025-06-12 10:30 会议录音",
    details: "项目进度讨论",
    type: "会议记录",
    duration: "00:42",
    generatingTime: "06/12 11:15",
  },
  {
    key: "2",
    file: "2025-06-11 09:15 客服通话",
    details: "客户反馈收集",
    type: "客服记录",
    duration: "05:21",
    generatingTime: "06/11 09:25",
  },
  {
    key: "3",
    file: "2025-06-10 16:45 外呼录音",
    details: "产品推广外呼",
    type: "外呼记录",
    duration: "02:33",
    generatingTime: "06/10 17:01",
  },
  {
    key: "4",
    file: "2025-06-09 18:30 私人备忘",
    details: "待办事项提醒",
    type: "私人记录",
    duration: "01:17",
    generatingTime: "06/09 18:32",
  },
  {
    key: "5",
    file: "2025-06-08 12:20 团队分享",
    details: "技术分享会",
    type: "团队记录",
    duration: "12:45",
    generatingTime: "06/08 12:55",
  },
  {
    key: "6",
    file: "2025-06-08 12:20 团队分享",
    details: "技术分享会",
    type: "团队记录",
    duration: "12:45",
    generatingTime: "06/08 12:55",
  },
];
</script>

<style scoped>
.optionPanel {
  display: none;
}
.optionHolder:hover .optionPanel {
  display: block;
}
</style>
