<template>
  <div id="ChatAreaFunctionsPanel" class="w-full h-full">
    <div
      class="w-full h-[600px] flex flex-col justify-start items-end gap-4 overflow-y-auto scrollBar-hide"
    >
      <UserChatBox />
      <AIChatBox />
      <UserChatBox />
      <AIChatBoxDeepThinking />
    </div>
  </div>
</template>

<script setup>
import { SlackOutlined } from "@ant-design/icons-vue";
import AIChatBox from "./AIChatBox.vue";
import UserChatBox from "./UserChatBox.vue";
import AIChatBoxDeepThinking from "./AIChatBoxDeepThinking.vue";
</script>
