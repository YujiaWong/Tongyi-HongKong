<template>
  <div id="SearchBtn">
    <button
      ref="searchButton"
      @click="
        () => {
          handleClick(), handleInput();
        }
      "
      class="w-10 h-10 flex justify-start items-center pl-3 rounded-full border border-gray-300 hover:border-[rgb(72,72,237)] transition-colors duration-300 pb-1"
    >
      <span
        class="text-[18px] text-gray-600 hover:text-[rgb(72,72,237)] transition-colors duration-300"
      >
        <SearchOutlined />
      </span>
      <form>
        <input
          placeholder="搜索历史记录"
          ref="searchInput"
          type="text"
          @click.stop
          class="hidden w-[200px] h-[34px] border-none pt-1 pl-2 focus:outline-none bg-[rgb(255,255,255,0)]"
        />
      </form>
    </button>
  </div>
</template>

<script setup>
import { SearchOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const searchButton = ref(null);
const searchInput = ref(null);
const count = ref(0);

function handleClick() {
  count.value = count.value + 1;
  const input = searchInput.value;
  const button = searchButton.value;

  // 设置 transitionbu
  button.style.transition = "width 0.3s ease";
  input.style.transition = "width 0.3s ease, opacity 0.3s ease";

  if (count.value % 2 !== 0 || document.activeElement === input) {
    button.style.width = "200px";
    input.style.display = "inline-block";
    input.style.opacity = "1";
    input.style.width = "200px";
  } else {
    button.style.width = "40px";
    input.style.opacity = "0";
    input.style.width = "0";

    setTimeout(() => {
      input.style.display = "none";
    }, 300); // 与 transition 时间一致
  }
}

const props = defineProps({
  showNewChat: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:showNewChat"]);
function handleInput() {
  emit("update:showNewChat", !props.showNewChat);
}
</script>
