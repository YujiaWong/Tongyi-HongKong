<template>
  <div id="ChapterSummary" class="w-full h-full">
    <div class="w-full h-full flex flex-col gap-2 mt-2">
      <div
        v-for="(item, index) in qaList"
        :key="index"
        class="w-full flex justify-start gap-4 rounded-md bg-[#615ced15] p-2"
      >
        <!-- QA 图标区域 -->
        <div
          class="QAHolder flex flex-col w-[50px] justify-center items-center bg-[#615ced55] rounded-md"
        >
          <div
            class="text-[#615ced] font-semibold flex justify-center items-center h-full"
          >
            <span class="text-xl">Q</span>
            <span>A</span>
          </div>
        </div>

        <!-- 问答内容 -->
        <div class="flex-1 flex flex-col justify-center gap-2">
          <div class="flex items-center gap-2">
            <div
              class="flex items-center px-1 rounded-2xl bg-[#615ced11] gap-1"
            >
              <SmileOutlined />
              <span class="text-[#615ced]">问：</span>
            </div>
            <span class="font-semibold">{{ item.question }}</span>
          </div>
          <div class="flex items-start gap-2">
            <div
              class="flex items-center px-1 rounded-2xl bg-[#615ced11] gap-1"
            >
              <SmileOutlined />
              <span class="text-orange-400">答：</span>
            </div>
            <span class="text-[12px] text-gray-500">{{ item.answer }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { SmileOutlined } from "@ant-design/icons-vue";

const qaList = [
  {
    question: "六月份有什么要注意的事项？",
    answer:
      "在六月份，需要尽快退出 UUAT 环境，以便将整体系统迁移至生产环境，同时进行相关收尾工作。目前我们已经完成了两个较大的项目模块，功能测试和用户验收都已通过，可以正式结项。此外，还有一个关于 logo 的问题尚未完全解决：新版 logo 的样式在部分页面上存在尺寸适配问题，可能影响整体 UI 的一致性，因此建议在本周内完成 logo 的替换与适配优化，确保上线版本的视觉统一和品牌完整性。",
  },
  {
    question: "项目进度是否正常？",
    answer: "目前所有任务已按时完成，未发现延期情况。",
  },
  {
    question: "还有哪些优化建议？",
    answer: "建议优化登录流程，提高用户体验，另外页面加载速度可以进一步提升。",
  },
  {
    question: "六月份有什么要注意的事项？",
    answer:
      "在六月份，需要尽快退出 UUAT 环境，以便将整体系统迁移至生产环境，同时进行相关收尾工作。目前我们已经完成了两个较大的项目模块，功能测试和用户验收都已通过，可以正式结项。此外，还有一个关于 logo 的问题尚未完全解决：新版 logo 的样式在部分页面上存在尺寸适配问题，可能影响整体 UI 的一致性，因此建议在本周内完成 logo 的替换与适配优化，确保上线版本的视觉统一和品牌完整性。",
  },
  {
    question: "六月份有什么要注意的事项？",
    answer:
      "在六月份，需要尽快退出 UUAT 环境，以便将整体系统迁移至生产环境，同时进行相关收尾工作。目前我们已经完成了两个较大的项目模块，功能测试和用户验收都已通过，可以正式结项。此外，还有一个关于 logo 的问题尚未完全解决：新版 logo 的样式在部分页面上存在尺寸适配问题，可能影响整体 UI 的一致性，因此建议在本周内完成 logo 的替换与适配优化，确保上线版本的视觉统一和品牌完整性。",
  },
];
</script>
