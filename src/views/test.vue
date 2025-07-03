<template>
  <div
    id="test"
    class="w-screen h-screen bg-blue-100 flex flex-col justify-center items-center gap-4"
  >
    <span
      class="text-blue-50 text-[100px] rotate-6 absolute top-[100px] left-[100px]"
      >APITest</span
    >
    <span
      class="text-blue-50 text-[100px] -rotate-6 absolute bottom-[300px] right-[50px]"
      >APITest</span
    >

    <!-- 聊天区域 -->
    <div
      ref="chatRef"
      class="chatArea w-[800px] h-[600px] overflow-y-auto rounded-2xl bg-blue-200 p-4 z-30"
    >
      <div v-for="(item, index) in messages" :key="index" class="my-6">
        <!-- 用户消息：右对齐 -->
        <div v-if="item.role === 'user'" class="flex justify-end">
          <span class="bg-white rounded-md p-2">{{ item.content }}</span>
        </div>
        <!-- 其他角色（assistant / system）：左对齐 -->
        <div v-else class="flex justify-start">
          <span class="bg-white rounded-md p-2">{{ item.content }}</span>
        </div>
      </div>
    </div>

    <!-- 输入框 -->
    <div
      class="w-[800px] h-[50px] bg-white rounded-lg p-2 px-4 flex justify-start items-center gap-4"
    >
      <input
        v-model="userInput"
        type="text"
        class="bg-transparent outline-none w-full"
        placeholder="请输入文本"
        @keyup.enter="sendMessage"
      />
      <button
        @click="sendMessage"
        class="whitespace-nowrap bg-pink-200 w-[70px] p-1 rounded-2xl text-white hover:bg-pink-300"
      >
        发送
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue"; // ← 加上 nextTick

// 聊天记录
const messages = ref([]);

// 输入框内容
const userInput = ref("");

// 发送消息
const sendMessage = async () => {
  const content = userInput.value.trim();
  if (!content) return;

  // 1. 推入用户消息
  messages.value.push({ role: "user", content });
  userInput.value = "";

  try {
    // 2. 请求 DashScope 兼容接口
    const resp = await fetch(
      "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_DASHSCOPE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "qwen-plus",
          messages: messages.value,
        }),
      }
    );
    const data = await resp.json();
    const aiReply =
      data.choices?.[0]?.message?.content || "⚠️ AI 没有返回任何内容";

    // 3. 推入 AI 回复
    messages.value.push({ role: "assistant", content: aiReply });
  } catch (err) {
    console.error(err);
    messages.value.push({
      role: "assistant",
      content: "❗️出错了，请检查网络或 API 设置",
    });
  }

  // 4. 滚动到底部
  await nextTick();
  document
    .querySelector(".chatArea")
    ?.scrollTo({ top: 99999, behavior: "smooth" });
};
</script>
