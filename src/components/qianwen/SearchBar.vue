<template>
  <div
    id="SearchBar"
    class="bg-white w-[900px] h-[50px] flex flex-row justify-start items-center border border-[rgb(72,72,237)] rounded-[16px] gap-4 px-4"
  >
    <button>
      <UploadOutlined class="text-xl" />
    </button>

    <form class="w-[95%] h-[100%]">
      <input
        v-model="inputValue"
        type="text"
        class="w-[100%] h-[100%] outline-none"
        placeholder="遇事不决问通义"
      />
    </form>
    <button @click="toggleToChatMode">
      <SendOutlined
        class="text-lg !text-white bg-[#d6d5de] rounded-full w-10 h-10 pt-[9px] pl-[2px]"
        :rotate="320"
        :class="{ '!bg-[rgb(72,72,237)]': hasInput }"
      />
    </button>
  </div>
</template>

<script setup>
import { UploadOutlined, SendOutlined } from "@ant-design/icons-vue";
import { ref, computed } from "vue";

const inputValue = ref(""); // 使用 ref 创建响应式变量

const hasInput = computed(() => {
  return inputValue.value.trim().length > 0; // 直接使用响应式变量
});

const props = defineProps({
  homePageMode: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:homPageMode"]);
//从homepage切换到对话模式
function toggleToChatMode() {
  emit("update:homePageMode", false);
}
</script>
