<template>
  <div id="VoiceToTextBar" class="w-full">
    <div class="flex justify-between items-center flex-[1] w-full">
      <span class="text-[16px]">语言转文字</span>
      <div class="flex justify-center items-center gap-2 text-gray-600">
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <SearchOutlined />
        </button>
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <FilterOutlined />
        </button>
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <TranslationOutlined />
        </button>
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <FileWordOutlined />
        </button>
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <SwapOutlined />
        </button>
        <button
          class="w-[20px] h-[20px] flex justify-center items-center rounded-md p-4 text-[#615ced] hover:bg-[rgb(68,51,255,0.1)] focus:!text-[rgb(68,51,255,0.8)]"
        >
          <TeamOutlined />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  FileDoneOutlined,
  CheckOutlined,
  SearchOutlined,
  QuestionOutlined,
  CloseOutlined,
  FilterOutlined,
  TranslationOutlined,
  PushpinOutlined,
  FileWordOutlined,
  SwapOutlined,
  TeamOutlined,
  SmileOutlined,
} from "@ant-design/icons-vue";
</script>
