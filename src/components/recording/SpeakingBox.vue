<template>
  <div id="SpeakingBox" class="w-full mb-2">
    <div class="w-full flex flex-col justify-center items-center gap-2">
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-start items-center text-gray-500 gap-2">
          <SmileOutlined class="text-xl" />
          <span>发言人识别中</span>
          <span> 00:00</span>
        </div>
        <div class="flex justify-start items-center gap-4">
          <button>
            <PushpinOutlined
              class="bg-blue-300 p-1 rounded-full !text-white text-xs"
            />
          </button>
          <button>
            <QuestionOutlined
              class="bg-pink-300 p-1 rounded-full !text-white text-xs"
            />
          </button>
          <button>
            <CheckOutlined
              class="bg-yellow-300 p-1 rounded-full !text-white text-xs"
            />
          </button>
          <button>
            <CloseOutlined
              class="bg-gray-300 p-1 rounded-full !text-white text-xs"
            />
          </button>
        </div>
      </div>
      <div class="w-full h-[100px] rounded-xl bg-[#615ced]"></div>
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
