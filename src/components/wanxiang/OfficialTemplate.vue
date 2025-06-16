<template>
  <div id="AIExpansion">
    <div
      class="holder flex flex-col w-[350px] h-[800px] shadow-lg shadow-gray-300 rounded-3xl p-6 pl-[50px] gap-2 bg-[#fafafc]"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="font-600 text-[16px]">官方示例</span>
        <button class="text-xl">×</button>
      </div>

      <!-- 滚动区域 -->
      <div class="flex-1 overflow-y-auto pr-2" style="min-height: 0">
        <div class="flex flex-col justify-center items-center gap-4">
          <img
            src="zoo1.jpg"
            alt=""
            class="w-full h-[200px] object-cover rounded-2xl"
          />
          <img
            src="zoo4.jpg"
            alt=""
            class="w-full h-[200px] object-cover rounded-2xl"
          />
          <img
            src="dog.jpg"
            alt=""
            class="w-full h-[200px] object-cover rounded-2xl"
          />
          <img
            src="cat3.jpg"
            alt=""
            class="w-full h-[200px] object-cover rounded-2xl"
          />
          <img
            src="cat4.jpg"
            alt=""
            class="w-full h-[200px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 3px;
}
</style>
