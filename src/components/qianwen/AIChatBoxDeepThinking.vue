<template>
  <div id="AIChatBox" class="w-[90%] relative mr-[50px]">
    <SlackOutlined
      class="rounded-2xl !text-white text-[32px] p-1 bg-gradient-to-br from-purple-300 to-[rgb(72,72,237)] absolute top-2 left-[-50px]"
    />
    <div class="w-full flex flex-col gap-4 rounded-xl p-4 bg-white">
      <div class="flex items-center gap-2">
        <RadarChartOutlined class="!text-gray-400 text-lg" /><span
          class="text-gray-400"
          >已完成深度思考（用时9秒）</span
        >
      </div>

      <span
        class="text-gray-400 text-[14px] border-l border-l-gray-200 pl-4 ml-2"
        >Okay, the user has sent "123" three times in a row. Each time, I've
        responded by asking for clarification. Now, on the fourth message, they
        just sent "123" again. Hmm. First, maybe they're testing if I'm paying
        attention. <br />
        Or perhaps they're trying to see how I respond to repetitive input.
        Since they haven't provided any context or specific questions, I need to
        figure out the best way to handle this. In previous interactions, the
        user might be looking for a pattern or expecting a different kind of
        response each time. They might be a bit playful or maybe not sure how to
        phrase their request. It's possible they want me to recognize the
        repetition and offer a different approach.<br />I should consider that
        the user might be using "123" as a placeholder or a code. Maybe it's
        part of a game or a cipher. Alternatively, they could be practicing
        sending messages or just being mischievous. Since there's no clear
        indication of their intent, the safest approach is to acknowledge the
        repetition and invite them to clarify their needs. I should keep the
        tone friendly and encouraging to prompt them to provide more
        information. Also, I need to make sure I'm not overcomplicating it. The
        user might simply want to continue the conversation in a non-serious
        way. So, a light-hearted response that's both helpful and engaging would
        be best here.
      </span>
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
  RadarChartOutlined,
  CopyOutlined,
  SendOutlined,
  SlackOutlined,
} from "@ant-design/icons-vue";
</script>
