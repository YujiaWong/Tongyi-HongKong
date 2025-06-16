<template>
  <div id="Speaker" class="w-full">
    <div class="flex flex-col justify-start items-start gap-2">
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-start items-center text-gray-500 gap-2">
          <SmileOutlined class="text-xl" />
          <span>发言人1</span>
          <span> 00:00</span>
        </div>
        <div class="flex justify-start items-center gap-4">
          <button>
            <PushpinOutlined class="bg-blue-300 p-1 rounded-full !text-white" />
          </button>
          <button>
            <QuestionOutlined
              class="bg-pink-300 p-1 rounded-full !text-white"
            />
          </button>
          <button>
            <CheckOutlined class="bg-yellow-300 p-1 rounded-full !text-white" />
          </button>
          <button>
            <CloseOutlined class="bg-gray-300 p-1 rounded-full !text-white" />
          </button>
        </div>
      </div>
      <div class="w-full p-4 rounded-lg bg-white text-[15px] text-gray-600">
        <span
          >发言内容当遇到路由问题时，打开浏览器的开发者工具查看控制台输出以及使用
          Vue Devtools
          检查当前的路由状态是非常有帮助的。这可以帮助你确定是否是由于某些脚本错误或状态管理问题导致的路由跳转失败。
          通过上述步骤逐一排查，你应该能够找到并解决问题所在。如果仍然无法解决，请提供更多的代码片段或具体的错误信息以便进一步诊断。</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { SmileOutlined } from "@ant-design/icons-vue";

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
} from "@ant-design/icons-vue";
</script>
