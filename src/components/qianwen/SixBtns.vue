<template>
  <div id="SixBtns">
    <div class="flex justify-start items-center gap-2">
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <RadarChartOutlined
          style="color: rgb(32, 227, 55)"
          class="text-red-400 hover:!text-[rgb(72,72,237)]"
        />
        <span>深度思考</span>
      </button>
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <AlertOutlined class="!text-purple-600" />
        <span>分析研究</span>
      </button>
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <CodeOutlined class="!text-blue-400" />
        <span>代码模式</span>
      </button>
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <ChromeOutlined class="!text-purple-400" />
        <span>联网搜索</span>
      </button>
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <FundOutlined class="!text-green-400" />
        <span>PPT模式</span>
      </button>
      <button
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <AppstoreOutlined class="!text-red-200" />
        <span>指令中心</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  RadarChartOutlined,
  FundOutlined,
  ChromeOutlined,
  AppstoreOutlined,
  AlertOutlined,
  CodeOutlined,
} from "@ant-design/icons-vue";
</script>
