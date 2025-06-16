<template>
  <div id="ChatAreaFunctionsPanel">
    <div
      class="flex w-full h-full flex-col justify-center items-start gap-4 mt-[100px]"
    >
      <div class="flex justify-center items-center gap-4">
        <SlackOutlined
          class="rounded-2xl !text-white text-[42px] p-1 bg-gradient-to-br from-purple-300 to-[rgb(72,72,237)]"
        />
        <div class="flex flex-col">
          <span class="text-[28px] font-bold">我是通义，你的实用AI助手</span>
          <span>我可以帮你做这些事情</span>
        </div>
      </div>
      <div class="flex w-full h-full justify-between items-center gap-[10px]">
        <div class="w-[400px] h-[200px] rounded-lg bg-[#d4e5ff20]">
          <div class="w-full flex justify-between items-center p-4">
            <span class="text-lg font-bold">效率工具</span>
            <button class="text-purple-100 text-xs hover:text-[rgb(72,72,237)]">
              发现更多
            </button>
          </div>
          <div
            id="fourFunctions"
            class="flex justify-between items-center gap-2 p-2 mt-2"
          >
            <a href="http://localhost:4200/live" target="_blank">
              <button
                class="flex flex-col justify-center items-center bg-white w-[80px] h-[100px] rounded-2xl hover:border hover:border-[rgb(72,72,237)]"
              >
                <img
                  src="https://img.alicdn.com/imgextra/i4/O1CN01C6MZ7t1GbAWytkIXX_!!6000000000640-2-tps-288-288.png"
                  alt="实时记录"
                  width="40"
                  height="40"
                />
                <span>实时记录</span>
              </button>
            </a>
            <button
              class="flex flex-col justify-center items-center bg-white w-[80px] h-[100px] rounded-2xl hover:border hover:border-[rgb(72,72,237)]"
            >
              <img
                src="https://img.alicdn.com/imgextra/i4/O1CN01hwL8fs208Hse9T2f6_!!6000000006804-2-tps-288-288.png"
                alt="PPT创作"
                width="40"
                height="40"
              />
              <span>PPT创作</span>
            </button>
            <button
              class="flex flex-col justify-center items-center bg-white w-[80px] h-[100px] rounded-2xl hover:border hover:border-[rgb(72,72,237)]"
            >
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01NWr3Kq1LsBK06yKIz_!!6000000001354-2-tps-288-288.png"
                alt="阅读助手"
                width="40"
                height="40"
              />
              <span>阅读助手</span>
            </button>
            <button
              class="flex flex-col justify-center items-center bg-white w-[80px] h-[100px] rounded-2xl hover:border hover:border-[rgb(72,72,237)]"
            >
              <img
                src="https://img.alicdn.com/imgextra/i4/O1CN01QWc6r61hdS8FwyCds_!!6000000004300-2-tps-288-288.png"
                alt="ai笔记"
                width="40"
                height="40"
              />
              <span>AI笔记</span>
            </button>
          </div>
        </div>
        <div
          class="w-[200px] h-[200px] rounded-lg bg-gradient-to-tr from-[#d4e5ff20] to-purple-100 flex flex-col justify-between items-start p-4"
        >
          <span class="text-lg font-bold">精选智能体</span>
          <div class="flex flex-col gap-2 w-full mb-3">
            <button
              class="flex w-full bg-white rounded-2xl p-1 gap-2 hover:border hover:border-[rgb(72,72,237)]"
            >
              <img
                src="https://qianwen.alicdn.com/upload/20250227/08806d6fa1414bc5c032c0e1b289be78/be69cb7e710d42a69c3534a5bb5f8443/cropped-1740638844624.png"
                alt="千问大模型"
                class="rounded-full w-[36px] h-[36px]"
              />
              <div
                class="flex flex-col justify-start items-start w-full text-xs"
              >
                <span class="font-bold">千问大模型</span>
                <span class="truncate w-[120px] text-gray-500"
                  >Qwen3模型重磅发布，支持多种模型自主切换</span
                >
              </div>
            </button>
            <button
              class="flex w-full bg-white rounded-2xl p-1 gap-2 hover:border hover:border-[rgb(72,72,237)]"
            >
              <img
                src="https://qianwen.alicdn.com/upload/20250327/08806d6fa1414bc5c032c0e1b289be78/1d9075504b6a4bf78de6e5890e832d27/cropped-1743042171754.png"
                alt="AI扩图"
                class="rounded-full w-[36px] h-[36px]"
              />
              <div
                class="flex flex-col justify-start items-start w-full text-xs"
              >
                <span class="font-bold">AI扩图</span>
                <span class="truncate w-[120px] text-gray-500"
                  >AI扩图工具，支持扩大倍数和更改比例</span
                >
              </div>
            </button>
          </div>
        </div>
        <div
          class="w-[200px] h-[200px] rounded-lg bg-[rgb(72,72,237,0.1)]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SlackOutlined } from "@ant-design/icons-vue";
</script>
