<template>
  <div id="ChatAreaFunctionsPanel" class="w-full h-full">
    <div
      class="w-full h-[600px] flex flex-col justify-start items-end gap-4 overflow-y-auto scrollBar-hide"
    >
      <div
        class="w-full flex flex-col justify-start items-end gap-4"
        v-for="(item, index) in messagesHtml"
        :key="index"
      >
        <div
          id="AIChatBox"
          class="relative mr-[50px]"
          @mouseenter="handleShowPencil"
          @mouseleave="handleUnshowPencil"
          v-if="item.role === 'user'"
        >
          <div class="w-full flex flex-col rounded-xl p-4 py-3 bg-[#E0DFFF]">
            <span class="text-[16px]">{{ item.content }}</span>
          </div>
          <div>
            <button ref="pencil">
              <EditOutlined
                class="text-md !text-gray-500 absolute top-1 left-full pl-2 hover:!text-[#615ced]"
              />
            </button>
            <button>
              <CopyOutlined
                class="text-md !text-gray-500 absolute top-7 left-full pl-2 hover:!text-[#615ced]"
              />
            </button>
          </div>
        </div>

        <div id="AIChatBox" class="w-[90%] relative mr-[50px]" v-else>
          <SlackOutlined
            class="rounded-2xl !text-white text-[32px] p-1 bg-gradient-to-br from-purple-300 to-[rgb(72,72,237)] absolute top-2 left-[-50px]"
          />
          <div class="w-full flex flex-col gap-0 rounded-xl p-4 bg-white">
            <!-- <span class="text-[16px]">{{ item.content }}</span> -->
            <span class="text-[16px]" v-html="item.html"></span>
            <div class="flex justify-end gap-5">
              <button>
                <DislikeOutlined class="hover:text-[rgb(72,72,237)]" />
              </button>
              <button>
                <LikeOutlined class="hover:text-[rgb(72,72,237)]" />
              </button>
              <button>
                <CopyOutlined class="hover:text-[rgb(72,72,237)]" />
              </button>
              <button>
                <SendOutlined class="hover:text-[rgb(72,72,237)]" />
              </button>
              <button>
                <SyncOutlined class="hover:text-[rgb(72,72,237)]" />
              </button>
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
        <!-- <UserChatBox />
      <AIChatBoxDeepThinking /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { SlackOutlined } from "@ant-design/icons-vue";
import AIChatBox from "./AIChatBox.vue";
import UserChatBox from "./UserChatBox.vue";
import AIChatBoxDeepThinking from "./AIChatBoxDeepThinking.vue";
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify"; // 可选
import hljs from "highlight.js"; // 可选
import markdownItHigh from "markdown-it-highlightjs"; // 可选
import {
  DislikeOutlined,
  LikeOutlined,
  SyncOutlined,
  PaperClipOutlined,
  CopyOutlined,
  SendOutlined,
} from "@ant-design/icons-vue";

import { EditOutlined } from "@ant-design/icons-vue";
import { ref, computed } from "vue";
const pencil = ref(null);
const timer = ref(null);
function handleShowPencil() {
  pencil.value.style.opacity = 100;
  clearTimeout(timer);
}
function handleUnshowPencil() {
  timer = setTimeout(() => {
    pencil.value.style.opacity = 0;
  }, 500);
}

const props = defineProps({
  messages: {
    type: Array,
  },
});

/* ---------- 1. 生成 md 实例 ---------- */
const md = new MarkdownIt({
  linkify: true,
  breaks: true,
}).use(markdownItHigh, { hljs });

const messagesHtml = computed(() =>
  (props.messages ?? []).map((m) => ({
    ...m,
    html: DOMPurify.sanitize(md.render(m.content)), // 若不想防 XSS，去掉 DOMPurify
  }))
);
</script>

<style scoped></style>
