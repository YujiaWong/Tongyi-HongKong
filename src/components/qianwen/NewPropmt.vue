<template>
  <div id="newChatBtn">
    <button
      ref="newChatBtn"
      class="w-[160px] bg-gray-50 py-[9px] hover:bg-[rgb(104,109,238,0.1)] text-gray-600 flex justify-center items-center gap-2 rounded-[20px] flex-nowrap"
      @click="openModal"
    >
      <PlusOutlined />
      <span>新建指令</span>
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
  showPromptBox: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:showPromptBox"]);

const openModal = () => {
  emit("update:showPromptBox", true); // 必须手动触发更新
};
const newChatBtn = ref(null);
onMounted(() => {
  const el = newChatBtn.value;
  if (el) {
    el.style.width = props.showNewChat ? "280px" : "0px";
    el.style.transition = "width 0.3s ease";
  }
  //   if (!props.showNewChat) {
  //     el.style.border = "none";
  //   }
});
watchEffect(() => {
  const el = newChatBtn.value;
  if (el) {
    el.style.width = props.showNewChat ? "280px" : "0px";
  }
  //   if (!props.showNewChat) {
  //     el.style.border = "none";
  //   }
});
// function handleShowNewPromptBox() {
//   showPromptBox.value = true;
// }
</script>

<style scoped>
button {
  white-space: nowrap;
  overflow: hidden;
}
</style>
