<template>
  <div id="newChatBtn">
    <button
      ref="newChatBtn"
      class="w-[160px] bg-[rgb(97,92,237)] py-[9px] hover:bg-[rgb(104,109,238)] text-white flex justify-center items-center gap-2 rounded-[20px] flex-nowrap"
    >
      <PlusOutlined />
      <span>新建对话</span>
    </button>
  </div>
</template>

<script setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { onMounted, ref, watchEffect } from "vue";

const props = defineProps({
  showNewChat: {
    type: Boolean,
    required: true,
  },
});
const newChatBtn = ref(null);
onMounted(() => {
  const el = newChatBtn.value;
  if (el) {
    el.style.width = props.showNewChat ? "160px" : "0px";
    el.style.transition = "width 0.3s ease";
  }
});
watchEffect(() => {
  const el = newChatBtn.value;
  if (el) {
    el.style.width = props.showNewChat ? "160px" : "0px";
  }
});
</script>

<style scoped>
button {
  white-space: nowrap;
  overflow: hidden;
}
</style>
