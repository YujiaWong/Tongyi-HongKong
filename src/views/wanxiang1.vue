<template>
  <div class="bg-[#f1f6ff] w-screen h-screen flex">
    <div
      id="left"
      class="w-[160px] h-full flex flex-col justify-between p-2 py-4 bg-[#f1f6ff] z-30"
    >
      <div id="top" class="flex flex-col justify-center items-center gap-4">
        <button class="flex justify-between items-center gap-2">
          <SlackOutlined class="text-2xl !text-[#615ced]" /><span
            class="space-nowrap text-[#615ced] text-[18px]"
            >通义万相</span
          >
        </button>
        <button
          class="w-[140px] flex justify-center items-center gap-4 rounded-3xl mt-4 !text-gray-500 py-[14px] px-6 focus:bg-white hover:bg-white focus:!text-[#615ced]"
        >
          <PictureOutlined class="!text-[16px]" /><span
            class="space-nowrap text-[15px]"
            >文字作画</span
          >
        </button>
        <button
          class="w-[140px] flex justify-center items-center gap-4 rounded-3xl py-[14px] px-6 text-gray-500 focus:bg-white hover:bg-white focus:!text-[#615ced]"
        >
          <YoutubeOutlined class="!text-[16px]" /><span
            class="space-nowrap text-[15px]"
            >视频生成</span
          >
        </button>
        <button
          class="w-[140px] flex justify-center items-center gap-4 rounded-3xl py-[14px] px-6 text-gray-500 focus:bg-white hover:bg-white focus:!text-[#615ced]"
        >
          <StarOutlined class="!text-[16px]" /><span
            class="space-nowrap text-[15px]"
            >我的收藏</span
          >
        </button>
      </div>
      <div id="bottom" class="w-full">
        <button
          class="w-[140px] flex justify-start items-center gap-4 rounded-3xl py-[14px] px-6 text-gray-500 focus:bg-white hover:bg-white focus:!text-[#615ced]"
        >
          <UserOutlined class="!text-[16px]" />
          <span class="space-nowrap text-[15px]">我的</span>
        </button>
      </div>
    </div>
    <div
      id="right"
      class="flex-1 my-4 mr-4 z-20 flex justify-start items-center gap-4"
    >
      <TextToPicPanel />
      <GeneratingArea />
      <TestDrawingInfo />
    </div>
  </div>
</template>

<script setup>
import {
  YoutubeOutlined,
  PictureOutlined,
  SlackOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";
import TextToPicPanel from "../components/wanxiang/TextToPicPanel.vue";
import GeneratingArea from "../components/wanxiang/GeneratingArea.vue";
import DrawingInfoBoard from "../components/wanxiang/DrawingInfoBoard.vue";
import TestDrawingInfo from "../components/wanxiang/TestDrawingInfo.vue";
</script>
