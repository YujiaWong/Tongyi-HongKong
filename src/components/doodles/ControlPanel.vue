<template>
  <div id="ControlPanel">
    <div class="flex justify-between items-center pb-4 pr-6">
      <span class="text-gray-400">
        支持下载或收藏，可通过管理画作进行删除，欢迎对创作点赞点踩并提出建议，助力模型不断进化。
      </span>
      <div class="flex justify-start items-center gap-4">
        <button @click="handleToggle" v-if="toggle" class="text-gray-400">
          取消
        </button>
        <button v-if="toggle" class="text-red-500">删除0条生成记录</button>
        <button
          @click="handleToggle"
          v-if="!toggle"
          class="flex justify-center items-center gap-2 text-gray-400"
        >
          <AppstoreOutlined /><span>管理画作</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AppstoreOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
//let toggle = ref(false); //显示管理画作或者删除/取消，默认显示管理画作

const props = defineProps({
  toggle: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:toggle"]);

// 点击按钮时，更新 toggle 的值
function handleToggle() {
  emit("update:toggle", !props.toggle);
}
</script>
