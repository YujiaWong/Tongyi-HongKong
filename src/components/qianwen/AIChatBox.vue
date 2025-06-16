<template>
  <div id="AIChatBox" class="w-[90%] relative mr-[50px]">
    <SlackOutlined
      class="rounded-2xl !text-white text-[32px] p-1 bg-gradient-to-br from-purple-300 to-[rgb(72,72,237)] absolute top-2 left-[-50px]"
    />
    <div class="w-full flex flex-col gap-4 rounded-xl p-4 bg-white">
      <span class="text-[16px]"
        >请问有什么我可以帮助您的吗？如果您有具体的问题或需要进一步的信息，请告诉我！你好！看起来你可能发送了一个“1”，有什么我可以帮助你的吗？如果你有任何问题或需要进一步的信息，请随时告诉我！😊</span
      >
      <div class="flex justify-end gap-5">
        <button><DislikeOutlined class="hover:text-[rgb(72,72,237)]" /></button>
        <button><LikeOutlined class="hover:text-[rgb(72,72,237)]" /></button>
        <button><CopyOutlined class="hover:text-[rgb(72,72,237)]" /></button>
        <button><SendOutlined class="hover:text-[rgb(72,72,237)]" /></button>
        <button><SyncOutlined class="hover:text-[rgb(72,72,237)]" /></button>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start gap-2 mt-2 mb-2">
      <button
        class="text-gray-500 p-2 px-4 rounded-2xl bg-white hover:bg-[#E0DFFF] hover:text-[rgb(72,72,237,0.8)]"
      >
        帮我写一篇科幻小说
      </button>
      <button
        class="text-gray-500 p-2 px-4 rounded-2xl bg-white hover:bg-[#E0DFFF] hover:text-[rgb(72,72,237,0.8)]"
      >
        写一首关于秋天的诗歌
      </button>
      <button
        class="text-gray-500 p-2 px-4 rounded-2xl bg-white hover:bg-[#E0DFFF] hover:text-[rgb(72,72,237,0.8)]"
      >
        来点写作灵感
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  DislikeOutlined,
  LikeOutlined,
  SyncOutlined,
  PaperClipOutlined,
  CopyOutlined,
  SendOutlined,
  SlackOutlined,
} from "@ant-design/icons-vue";
</script>
