<template>
  <div class="Cards">
    <button
      class="flex flex-col justify-center items-center p-1 w-[150px] h-[200px] rounded-2xl bg-[#fafafc] hover:bg-white"
    >
      <div class="w-[120px] h-[120px] bg-red-400 rounded-2xl"></div>
      <div class="flex flex-col justify-start items-start mt-2">
        <span class="text-[16px]">{{ title }}</span>
        <span class="text-xs text-gray-500">{{ desc }}</span>
      </div>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
</script>
